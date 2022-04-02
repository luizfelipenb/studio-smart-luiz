import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Tasks } from "../pages/Tasks";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
