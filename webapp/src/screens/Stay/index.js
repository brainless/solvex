import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Detail from "./Detail";

export default () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/:stayId/:slug`}>
        <Detail />
      </Route>
    </Switch>
  );
};
