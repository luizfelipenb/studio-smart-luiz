import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleChangePage = (path, history) => {
    history.push(path);
  };

  return (
    <NavigationContext.Provider
      value={{ showNav, handleShowNav, handleChangePage }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
