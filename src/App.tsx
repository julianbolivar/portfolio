import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "utils/history";
import Home from "containers/Home";
import Notfound from "containers/NotFound";

const App: React.FC<{}> = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
