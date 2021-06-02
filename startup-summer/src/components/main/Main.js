import React from "react";
import { Route, Switch } from "react-router-dom";
import { Empty } from "./Empty";
import { StartPage } from "./StartPage";
import { User } from "./User";

export const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/user/:login">
          <User />
        </Route>
        <Route path="/empty">
          <Empty />
        </Route>
      </Switch>
    </main>
  );
};
