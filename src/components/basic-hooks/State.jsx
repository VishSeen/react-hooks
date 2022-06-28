import React, { useState } from 'react';


/**
   * State is a hook that lets you add new state variables to your components.
   * State variables are *only* updated when the component re-renders.
   */
const State = () => {

  // Declare a new state variable, which we'll call "count".
  // The function call "setCount" is used to update the variable "count".
  // With useState() you assign a default value, in our case '0'.
  const [count, setCount] = useState(0);



  // Here we make a function called 'increment' which should increment the value.
  // With the setCount() function, we can then update our variable "count".
  const increment = () => {
    setCount(count + 1);
  }

  // Here we make a function called 'decrement' which should decrement the value.
  // With the setCount() function, we then update our variable "count".
  const decrement = () => {
    setCount(count - 1);
  }



  return (
    <>
      <h1>UseState</h1>

      <div className="contents">
        <h2>What is useState ?</h2>
        <p>
          State is a hook that lets you add new state variables to your components. State variables are *only* updated when the component re-renders.
        </p>
      </div>

      <div className="contents">
        <h2>When to use it ?</h2>
        <p>
          This is a test.
        </p>
      </div>

      <br />

      <div className='counter-container'>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default State