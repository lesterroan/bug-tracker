import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <div className="App container">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
