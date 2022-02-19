import { render, screen,fireEvent } from '@testing-library/react';
import Todo from '../Todo'

const mockedSetTOdo=jest.fn() // does nothing

const addTodo = (tasks) =>{
  const inputElement = screen.getByPlaceholderText("input todo");
        const buttonElement=screen.getByRole("button",{name:/Add/i})
        tasks.forEach(task => {
          fireEvent.change(inputElement,{target:{value:task}})
          fireEvent.click(buttonElement)
        });
}
describe('test input ',()=>{
   
      test('on click add element check todo in document ', async () => {
        render(<Todo/>);
        const inputElement = screen.getByPlaceholderText("input todo");
        const buttonElement=screen.getByRole("button",{name:/Add/i})
        fireEvent.change(inputElement,{target:{value:"call rafael"}})

       fireEvent.click(buttonElement)
        // expect(inputElement.value).toBe("")
        const liElement=screen.getByText(/call rafael/i)
        expect(liElement).toBeInTheDocument();
     
      });
// multiple
      test('multiple todo ', async () => {
        render(<Todo/>);
        addTodo(["todo1","todo2","todo3"])
        const liElement=screen.getAllByTestId("liID")
        expect(liElement.length).toBe(3)
        
     
      });
      // newly added todo should have class css pending-todo
      test('task show not have completed class ', async () => {
        render(<Todo/>);
        addTodo(["todo1","todo2","todo3"])
        const liElement=screen.getByText(/todo1/i)
        expect(liElement).toHaveClass("pending-todo")
        
     
      });

       // onclick of todo completed test
       test('task should have completed class ', async () => {
        render(<Todo/>);
        addTodo(["todo1","todo2","todo3"])
        const liElement=screen.getByText(/todo1/i)
        fireEvent.click(liElement);
        expect(liElement).toHaveClass("completed-todo")
        
     
      });
})








