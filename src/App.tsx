import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Main from "pages/Main";
import Notfound from "pages/NotFound";

import "./App.css";

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={Notfound} />
      </Switch>
    </HashRouter>
  );
};

export default App;
