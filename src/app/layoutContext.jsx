"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const LayoutContext = ({ children }) => {
  const [searchType, setSearchType] = useState("hotel");
  return (
    <Context.Provider value={{ searchType, setSearchType }}>
      {children}
    </Context.Provider>
  );
};

export default LayoutContext;
