import { createContext, useContext, useState } from "react";

const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  return <ListsContext.Provider value={{}}>{children}</ListsContext.Provider>;
};

export const useLists = () => useContext(ListsContext);
