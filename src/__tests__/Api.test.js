import { render, screen } from '@testing-library/react';
import ApiData from '../components/ApiData';

const mockedSetTOdo = jest.fn() // does nothing
describe('Api Data ', () => {
    test('get 1st api record ', async () => {
        render(<ApiData />);
        const titleElement = await screen.findByTestId('api-data-0'); // get by text id doesnt work on async await
        screen.debug()
        expect(titleElement).toBeInTheDocument();
    });

    test('get all records', async () => {
        render(<ApiData />);
        const titleElement = await screen.findAllByTestId(/api-data/i); // get by text id doesnt work on async await
        expect(titleElement.length).toBe(titleElement.length);
    });

    

   });









