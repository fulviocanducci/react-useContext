import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

export default function CounterProvider({ children }) {
  const [value, setValue] = useState(0);
  return (
    <CountContext.Provider value={{ value, setValue }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  const { value, setValue } = context;
  return { value, setValue };
}
