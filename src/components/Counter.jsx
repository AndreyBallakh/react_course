import React, { useState } from "react";

const useCounter = function () {
  const [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(count - 1);
  }

  return { count, increament, decreament };
};

const Counter = function () {
  const { count, increament, decreament } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Dereament</button>
    </div>
  );
};

export default Counter;
