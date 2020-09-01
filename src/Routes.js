import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { GuestOptions } from "./components/GuestOptions";
import { Dashboard } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ManageUsers from "./components/ManageUsers";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/guest" component={GuestOptions} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/ManageUsers" component={ManageUsers} />
    </Switch>
  );
}
