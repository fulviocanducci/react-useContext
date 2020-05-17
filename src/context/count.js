import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => setValue(value + 1);
  return (
    <CountContext.Provider value={{ value, handleIncrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  const { value, handleIncrement } = context;
  return { value, handleIncrement };
};

export default CounterProvider;
