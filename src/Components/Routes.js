import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
