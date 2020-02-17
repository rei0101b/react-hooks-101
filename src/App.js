import React, { useState } from "react";

export const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

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
