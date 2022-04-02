import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  const [newList, setNewList] = useState([]);

  const addList = (data) => {
    api
      .post("/studiosmart/createlist", data)
      .then((res) => setNewList([...newList, res]));
  };

  const deleteList = (id) => {
    api.delete(`/studiosmart/deletelist/${id}`);
  };

  const addCardTask = (id, data) => {
    api.put(`/studiosmart/createtask/${id}`, data);
  };

  const deleteTask = (taskId, listId) => {
    api.delete(`/studiosmart/deletetask/${taskId}/fromlist/${listId}`);
  };
  useEffect(() => {
    api.get("/studiosmart/lists").then((res) => setNewList(res.data));
  });

  return (
    <ListsContext.Provider
      value={{ newList, addList, deleteList, addCardTask, deleteTask }}
    >
      {children}
    </ListsContext.Provider>
  );
};

export const useLists = () => useContext(ListsContext);
