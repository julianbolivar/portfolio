import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "containers/Home";
import Notfound from "containers/NotFound";

const App: React.FC<{}> = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </HashRouter>
  );
};

export default App;
