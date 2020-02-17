import React, { useState } from "react";

export const App = props => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };
  return (
    <>
      <div>
        <p>
          現在の{name}は、{price}円です
        </p>
        <button onClick={() => setPrice(price + 1)}>＋</button>
        <button onClick={() => setPrice(price - 1)}>ー</button>
        <button onClick={reset}>R</button>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000
};
