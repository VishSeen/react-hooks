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
          State is a hook that lets you add new state variables to your components. <br/>
          State variables are *only* updated when the component re-renders. <br/>
          It is used when you want a certain component's current value to be save or manipulated, like fetching data and setting as props.
        </p>
      </div>

      <div className="contents">
        <h2>How to use ?</h2>
        <p>
          1. It should be declared before the return statement/ on top level. <br/>
          2. It should contain an initial value in the function <strong>"useState(value)"</strong>. <br/>
          3. You should destructure the value from the "useState" as <strong>"const [value, setValue]"</strong> where "setValue" should be used to update the value. <br/>
          4. It can contain <em>"strings, boolean, numbers"</em>. <br />
          5. Everytime we call the "setValue" function, the component will be re rendered. <br/>
          6. You can also pass a function callback in the "useState" function that will run before setting the default value. It can be used if a calculation or something is needed before setting a default value. <br/>
          7. Or you can pass a function to the <strong>"useState"</strong> that will run the function everytime you are setting the state. <br/>
          8. If you are using an object as state, make sure to get the old value and update all the values as it will be overridden by the one you are setting.
          <strong>PS:</strong> See the code for more info.
        </p>
      </div>

      <br />

      <div className='state-counter-container'>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default State