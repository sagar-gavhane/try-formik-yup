import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PageNotFound from "./containers/Pages/PageNotFound/PageNotFound";
import Register from "./containers/Auth/Register/Register";

render(
  <Router>
    <Switch>
      <Route path="/" component={Register} exact />
      <Route path="/register" component={Register} exact />
      <Route component={PageNotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
