import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Routes />
    </div>
  );
}

export default App;
