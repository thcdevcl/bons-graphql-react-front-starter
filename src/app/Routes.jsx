import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "../features/LandingPage/";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>
);
