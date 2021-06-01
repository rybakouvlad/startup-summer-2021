import React, { useEffect, useState } from "react";
import { Switch, useHistory, useRouteMatch, Route } from "react-router";
import { ListRepository } from "./ListRepository";
import { EmptyRepository } from "./EmptyRepository";

export const Repository = ({ login, repos }) => {
  const path = useRouteMatch();
  const history = useHistory();
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(path);
    if (repos) {
      console.log("!!!!!!!!!!", path);
      history.push(`${path.url}/1`);
    }
  }, []);
  return repos ? (
    <>
      <Switch>
        <Route path={`${path.url}/:page`}>
          <ListRepository login={login} repos={repos}/>
        </Route>
      </Switch>
      <button
        onClick={() => {
          setPage(page + 1);
          history.push(`${path.url}/${page}`);
        }}
      >
        CLICK
      </button>
    </>
  ) : (
    <EmptyRepository />
  );
};
