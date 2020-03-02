import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Auth from "../Routes/Auth";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/auth" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
