import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  const [newList, setNewList] = useState([]);

  const addList = (data) => {
    api
      .post("/studiosmart/create", data)
      .then((res) => setNewList([...newList, res]));
  };

  const deleteList = (name) => {
    api.delete(`/studiosmart/deletelist/${name}`);
  };

  const addCardTask = (list, data) => {};

  useEffect(() => {
    api.get("/studiosmart/lists").then((res) => setNewList(res.data));
  });

  return (
    <ListsContext.Provider
      value={{ newList, addList, deleteList, addCardTask }}
    >
      {children}
    </ListsContext.Provider>
  );
};

export const useLists = () => useContext(ListsContext);
