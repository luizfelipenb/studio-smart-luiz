import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  const [newList, setNewList] = useState(api.lists);
  const [newTask, setNewTask] = useState(newList.tasks);

  console.log(newTask);
  console.log(newList);
  const addList = (data) => {
    setNewList([...newList, data]);
  };

  return (
    <ListsContext.Provider value={{ newList, addList, newTask, setNewTask }}>
      {children}
    </ListsContext.Provider>
  );
};

export const useLists = () => useContext(ListsContext);
