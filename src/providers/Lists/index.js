import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  const [newList, setNewList] = useState(api.lists);

  const addList = (data) => {
    setNewList([...newList, data]);
  };

  const addCardTask = (list, data) => {
    console.log(list);
    console.log(data);
  };

  return (
    <ListsContext.Provider value={{ newList, addList, addCardTask }}>
      {children}
    </ListsContext.Provider>
  );
};

export const useLists = () => useContext(ListsContext);
