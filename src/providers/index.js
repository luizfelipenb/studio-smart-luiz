import { NavigationProvider } from "./Navigation";
import { ListsProvider } from "./Lists";

const Providers = ({ children }) => {
  return (
    <NavigationProvider>
      <ListsProvider>{children}</ListsProvider>
    </NavigationProvider>
  );
};

export default Providers;
