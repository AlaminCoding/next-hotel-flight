"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const LayoutContext = ({ children }) => {
  const [searchType, setSearchType] = useState("hotel");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <Context.Provider
      value={{
        searchType,
        setSearchType,
        searchResult,
        setSearchResult,
        searchModalOpen,
        setSearchModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default LayoutContext;
