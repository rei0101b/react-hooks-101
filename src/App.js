import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);
  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const divide3 = () => setCount(count % 3 === 0 ? count / 3 : count);
  return (
    <>
      <div>Hello React</div>
      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decreament}>-</button>
      <button onClick={double}>*2</button>
      <button onClick={reset}>reset</button>
      <button onClick={divide3}>fizz3</button>
    </>
  );
};
