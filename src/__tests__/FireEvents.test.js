import { render, screen,fireEvent } from '@testing-library/react';
import Todo from '../Todo'

const mockedSetTOdo=jest.fn() // does nothing
describe('test input ',()=>{
    test('if placeholder exisitst ', async () => {
        render(<Todo/>);
        const titleElement = screen.getByPlaceholderText("input todo");
        expect(titleElement).toBeInTheDocument();
      });

      test('check if input value changes ', async () => {
        render(<Todo/>);
        const inputElement = screen.getByPlaceholderText("input todo");
        fireEvent.change(inputElement,{target:{value:"call rafael"}})
        expect(inputElement.value).toBe("call rafael")
      });

      test('on click of add button todo empty value ', async () => {
        render(<Todo/>);
        const inputElement = screen.getByPlaceholderText("input todo");
        const buttonElement=screen.getByRole("button",{name:/Add/i})
        fireEvent.change(inputElement,{target:{value:"call rafael"}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
     
      });
})








