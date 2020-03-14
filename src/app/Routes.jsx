import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./Index";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </BrowserRouter>
);
