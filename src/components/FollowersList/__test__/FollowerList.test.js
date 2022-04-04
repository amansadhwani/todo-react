import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList'
import { BrowserRouter } from 'react-router-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node';



const followersResponse = rest.get('https://randomuser.me', (req, res, ctx) => {
    return res(ctx.json({
        data: {
            results: [
                {
                    name: {
                        first: "Laith",
                        last: "Harb"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/59.jpg"
                    },
                    login: {
                        username: "ThePhonyGOAT"
                    }
                },
                {
                    name: {
                        first: "abc",
                        last: "xyz"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/60.jpg"
                    },
                    login: {
                        username: "abcxyz"
                    }
                }
            ],
        }
    }
    ))
})

const handlers = [followersResponse]
const server = new setupServer(...handlers)

beforeEach(() => server.resetHandlers());
beforeAll(() => server.listen({
    onUnhandledRequest: ({ method, url }) => {
        if (!url.pathname.startsWith("/api")) {
            throw new Error(`Unhandled ${method} request to ${url}`);
        }
    },
}));
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const MockFollowerList = () => {
    return <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
}

describe('followers List ', () => {
    // it("using async await to load elements", async () => {
    //     render(<MockFollowerList />)
    //     const divElement = await screen.findAllByTestId(/allFollowers-/i);
    //     expect(divElement.length).toBe(2)

    // })

    it("check single follower item", async () => {
        render(<MockFollowerList />)
        const divElement = await screen.findByTestId('allFollowers-0')
        expect(divElement).toBeInTheDocument()
    })
})

