import { render, screen } from '@testing-library/react';
import Header from '../Header'

it('should render title passed as props ', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
});

it("check if heading exists", () => {
    render(<Header />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

it("if there are multiple heading than", () => {
    render(<Header title="My Header" />)
    const heading = screen.getByRole("heading", { name: "My Header" });
    expect(heading).toBeInTheDocument();
})


//find by used async await

it("using find By", async () => {
    render(<Header />)
    const heading = await screen.findByRole("heading");
    expect(heading).toBeInTheDocument();
})

//query By

it("using query by ", async () => {
    render(<Header title="My Header" />)
    const heading = await screen.queryByText(/My Headerr/i); // here if we would have used getByText It would have failed here itself
    expect(heading).not.toBeInTheDocument(); // not
})


//get all by role gives array

it("using query by ", () => {
    render(<Header title="My Header" />)
    const headingElements = screen.getAllByRole("heading"); // count number of heading elements
    //expect(headingElements).toHaveLength(1)
    expect(headingElements.length).toBe(1)
})


//test id

it("using test id", () => {
    render(<Header title="My Header" />)
    const heading = screen.getByTestId("header")
    expect(heading).toBeInTheDocument();
})

