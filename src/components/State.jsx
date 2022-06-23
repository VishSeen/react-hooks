import React from 'react'

const State = () => {
  const [count, setCount] = React.useState(() => {

    return 0;
  });

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>UseState</h1>

      <p>

      </p>

      <br />

      <div>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default State