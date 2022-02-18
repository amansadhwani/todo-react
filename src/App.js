import React from 'react';
//import './style.css';
import Todo from './Todo';

export default function App() {
  const [count, setCount] = React.useState(0);
  const array = new Array(100).fill(2);
  // const reducedValue = array.reduce((a, b) => {
  //   debugger;
  //   console.log('computed again')
  //   return a + b;
  // })
  const reducedValue = React.useMemo(() => array.reduce((a,b) =>{
    debugger;
    console.log('computed again') 
    return a + b;}),
     [])
  return (
    <div>
      <h1>{count}</h1>
      <p> {reducedValue} </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase countt
      </button>

      <Todo/>
    </div>
  );
}
