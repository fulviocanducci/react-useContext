import React from "react";

import { useCount } from "./context/count";

function Counter() {
  const { value, setValue } = useCount();
  return (
    <div>
      {value}
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
