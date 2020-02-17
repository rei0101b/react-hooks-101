import React, { useState, useEffect } from "react";

export const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("use effect");
  });

  useEffect(() => {
    console.log("use effect: Didmout");
  }, []);

  useEffect(() => {
    console.log("use effect: NameOnly");
  }, [name]);

  return (
    <>
      <div>
        <p>
          現在の{name}は、{price}円です
        </p>
        <button onClick={() => setState({ ...state, price: price + 1 })}>
          ＋
        </button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>
          ー
        </button>
        <button onClick={() => setState(props)}>R</button>
        <input
          value={state.name}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
      </div>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000
};
