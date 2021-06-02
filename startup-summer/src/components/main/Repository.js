import React, { useEffect, useState } from "react";
import { Switch, useHistory, useRouteMatch, Route } from "react-router";
import { ListRepository } from "./ListRepository";
import { EmptyRepository } from "./EmptyRepository";
import { RepoPagination } from "./RepoPagination";

export const Repository = ({ login, repos }) => {
  const path = useRouteMatch();
  const history = useHistory();
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (repos) {
      history.push(`${path.url}/${page}`);
    }
  }, [page]);
  
  return repos ? (
    <section className="repository">
      <Switch>
        <Route path={`${path.url}/:page`}>
          <ListRepository login={login} repos={repos} />
        </Route>
      </Switch>
      <RepoPagination repos={repos} page={page} setPage={setPage}/>
    </section>
  ) : (
    <EmptyRepository />
  );
};
