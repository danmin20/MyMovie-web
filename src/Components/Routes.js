import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Auth from "../Routes/Auth";
import MyPage from "../Routes/MyPage";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/auth" component={Auth} />
    <Route exact path="/mypage" component={MyPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
