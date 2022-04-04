import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput'

const mockedSetTodos = jest.fn()


describe('tests', () => {

    it('should render input element ', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />)
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input ', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />)
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        fireEvent.change(inputElement, { target: { value: 'add new todo' } })
        expect(inputElement.value).toBe('add new todo');
    });

    it('should have empty input when add button clicked', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />)
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const btnElement = screen.getByRole("button",{name:/Add/i});
        fireEvent.change(inputElement, { target: { value: 'add new todo' } })
        fireEvent.click(btnElement)
        expect(inputElement.value).toBe('');
    });


})
