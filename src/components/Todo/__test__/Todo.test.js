import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
    return <BrowserRouter>
        <Todo />
    </BrowserRouter>
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const btnElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(btnElement);
    });
}


describe('tests', () => {

    it('should render todo element ', () => {
        render(<MockTodo />)
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const btnElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: 'add new todo' } })
        fireEvent.click(btnElement);
        const divElement = screen.getByText("add new todo")
        //expect(inputElement.value).toBe('');
        expect(divElement).toBeInTheDocument()
    });


    it('should render multiple todos element ', () => {
        render(<MockTodo />)
        addTask(['todo 1', 'todo 2', 'todo 3'])
        const divElement = screen.getAllByTestId("todos")
        expect(divElement.length).toBe(3)
    });


    it('todo should not have completed class when initially rendered ', () => {
        render(<MockTodo />)
        addTask(['todo 1', 'todo 2'])
        const divElement = screen.getByText("todo 1")
        expect(divElement).not.toHaveClass('todo-item-active')
    });

    it('todo should have completed class when clicked ', () => {
        render(<MockTodo />)
        addTask(['todo 1', 'todo 2'])
        //const divElement=screen.getByText("todo 1")
        const divElement = screen.getByText("todo 1")
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active');
    });
})
