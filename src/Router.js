import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Assessment from "./components/Assessment";
import ShoppingList from "./components/ShoppingList";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Test from "./Test";
const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/Assessment" component={Assessment} />
    <Route exact path="/ShoppingList" component={ShoppingList} />
    <Route exact path="/SignIn" component={SignIn} />
    <Route exact path="/SignUp" component={SignUp} />
    <Route exact path="/Test" component={Test} />
  </Switch>
);

export default Router;
