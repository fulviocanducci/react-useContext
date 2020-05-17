import React from "react";

import { useCount } from "./context/count";

function Counter() {
  const { value, handleIncrement } = useCount();
  return (
    <div>
      {value}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
