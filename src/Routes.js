import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { GuestOptions } from "./components/GuestOptions";
import { Dashboard } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ManageUsers from "./components/ManageUsers";
import Projects from "./components/Projects";
import Project from "./components/Project";
import EditProject from "./components/EditProject";
import Issues from "./components/Issues";
import PrivateRoute from "./components/PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      {/* <Route path="/" exact component={Dashboard} /> */}
      <Route path="/login" exact component={Login} />

      <PrivateRoute path="/guest" component={GuestOptions} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      <PrivateRoute path="/manageusers" component={ManageUsers} />
      <PrivateRoute path="/projects" component={Projects} />
      <PrivateRoute path="/project" component={Project} />
      <PrivateRoute path="/editproject" component={EditProject} />
      <PrivateRoute path="/issues" component={Issues} />
    </Switch>
  );
}
