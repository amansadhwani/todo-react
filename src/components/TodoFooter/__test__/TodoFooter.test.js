import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
}

describe('tests', () => {

    // we do this in order to use link it should be wrapped inside browser router
    it('should render numberOfIncompleteTasks properly', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={0} />);
        const paraElement = screen.getByText(/0 tasks left/i);
        //expect(paraElement).toContainHTML('p');
        expect(paraElement).toBeInTheDocument();
    });

    it('if element is visible', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={0} />);
        const paraElement = screen.queryByText(/0 tasks left/i);

        expect(paraElement).toBeVisible();
    });

    it('text content', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={0} />);
        const paraElement = screen.getByTestId('para');
        expect(paraElement).toHaveTextContent('0 tasks left');
    });


    it('to contain text', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={0} />);
        const paraElement = screen.getByTestId('para');
        expect(paraElement.textContent).toBe("0 tasks left")
    });



})

