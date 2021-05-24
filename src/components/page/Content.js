import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
const Content = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">{/* <Home /> */}</Route>
        <Route path="/product">{/* <Products /> */}</Route>
      </Switch>
    </Router>
  );
};

export default Content;
