import React, { useState } from "react";

export const MyContext = React.createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState({
    count: 0,
    testADD: () => add(),
    testDEL: () => deleteC()
  });
  const add = () => {
    console.log(data.count);
    setData((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  const deleteC = () => {
    console.log(data.count);
    setData((prev) => ({ ...prev, count: prev.count - 1 }));
  };

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};
