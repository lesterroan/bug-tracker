import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { GuestOptions } from "./components/GuestOptions";
import { Dashboard } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ManageUsers from "./components/ManageUsers";
import Projects from "./components/Projects";
import Project from "./components/Project";
import EditProject from "./components/EditProject";
import Issues from "./components/Issues";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/guest" component={GuestOptions} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/manageusers" component={ManageUsers} />
      <Route path="/projects" component={Projects} />
      <Route path="/project" component={Project} />
      <Route path="/editproject" component={EditProject} />
      <Route path="/issues" component={Issues} />
    </Switch>
  );
}
