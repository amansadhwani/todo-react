import { render, screen } from '@testing-library/react';
import CountTodo from '../CountTodo'

//test or it

// 

describe('test in block', ()=>{

  test('test completed todos ', () => {
    render(<CountTodo todoCount={3} />);
    const titleElement = screen.getByText(/3 todos completed/i);
    expect(titleElement).toBeInTheDocument();
  });
  
  test('visible to the user ', () => {
    render(<CountTodo todoCount={3} />);
    const titleElement = screen.getByText(/3 todos completed/i);
    expect(titleElement).toBeVisible(); // opacity 0 would lead to false
  });
  
  test('contain html ', () => {
    render(<CountTodo todoCount={3} />);
    const titleElement = screen.getByText(/3 todos completed/i);
    expect(titleElement).toContainHTML("h3")
  });
  
  
  test('contain html ', () => {
    render(<CountTodo todoCount={3} />);
    const titleElement = screen.getByTestId("count-1");
    expect(titleElement).toHaveTextContent("3 todos completed")
  });
})


// // should not be visible
// test('contain html ', () => {
//   render(<CountTodo todoCount={4} />);
//   const titleElement = screen.getByTestId("count-1");
//   expect(titleElement).not.toBeVisible()
// });


// test('contain html ', () => {
//   render(<CountTodo todoCount={3} />);
//   const titleElement = screen.getByTestId("count-1");
//   expect(titleElement.textContent).toBe("3 todos completed")  // might only work with para textcontent
// });