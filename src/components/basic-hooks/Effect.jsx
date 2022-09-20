import React from 'react'


/**
   * Effect is a hook that lets you add new Effect variables to your components.
   * Effect variables are *only* updated when the component re-renders.
   */
const Effect = () => {
  return (
    <>
      <h1>UseEffect</h1>

      <div className="contents">
        <h2>What is useEffect ?</h2>
        <p>
          State is a hook that lets you add new state variables to your components. <br />
          State variables are *only* updated when the component re-renders. <br />
          It is used when you want a certain component's current value to be save or manipulated, like fetching data and setting as props.
        </p>
      </div>

      <div className="contents">
        <h2>How to use ?</h2>
        <p>
          1. It should be declared before the return statement/ on top level. <br />
          2. It should contain an initial value in the function <strong>"useState(value)"</strong>. <br />
          3. You should destructure the value from the "useState" as <strong>"const [value, setValue]"</strong> where "setValue" should be used to update the value. <br />
          4. It can contain <em>"strings, boolean, numbers"</em>. <br />
          5. Everytime we call the "setValue" function, the component will be re rendered. <br />
          6. You can also pass a function callback in the "useState" function that will run before setting the default value. It can be used if a calculation or something is needed before setting a default value. <br />
          7. Or you can pass a function to the <strong>"useState"</strong> that will run the function everytime you are setting the state. <br />
          8. If you are using an object as state, make sure to get the old value and update all the values as it will be overridden by the one you are setting.
          <strong>PS:</strong> See the code for more info.
        </p>
      </div>
    </>
  )
}

export default Effect;