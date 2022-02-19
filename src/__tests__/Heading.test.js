import { render, screen } from '@testing-library/react';
import Todo from '../Todo'

//test or it

// 

test('test title ', () => {
  render(<Todo titleName="testin" />);
  const titleElement = screen.getByText(/testin/i);
  expect(titleElement).toBeInTheDocument();
});

// test('test title by heading', () => {
//   render(<Todo titleName="testin" />);
//   const titleElement = screen.getByRole("heading");  // eg for h1 tags if multiple it will fail so below is solution
//   expect(titleElement).toBeInTheDocument();
// });


// test('test title by heading if multiple', () => {
//   render(<Todo titleName="testin" />);
//   const titleElement = screen.getByRole("heading",{name:"testin"});  // if we have more h1 tags than we make sure it only run on spcefic
//   expect(titleElement).toBeInTheDocument();
// });

test('test title by title', () => {
  render(<Todo titleName="testin" />);
  const titleElement = screen.getByTitle("header");  // get by title
  expect(titleElement).toBeInTheDocument();
});

test('test title by test id', () => {
  render(<Todo titleName="testin" />);
  const titleElement = screen.getByTestId("header-1");  // get by test id
  expect(titleElement).toBeInTheDocument();
});

// find by only works with async await 

test('test title by find by async await', async () => {
  render(<Todo titleName="testin" />);
  const titleElement = await screen.findByTestId("header-1");  // find by works only if we include async await 
  expect(titleElement).toBeInTheDocument();
});


// query by if doesnt exist 

test('test title by query by', async () => {
  render(<Todo titleName="testin" />);
  const titleElement = await screen.queryByText(/ddd/i);  // query by if we would have used getByText it fails so query by
  expect(titleElement).not.toBeInTheDocument();
});


// getAllByRole means total number of heading tags in component

test('test title by query by', async () => {
  render(<Todo titleName="testin" />);
  const titleElement = await screen.getAllByRole("heading");  //
  expect(titleElement.length).toBe(3)
});





