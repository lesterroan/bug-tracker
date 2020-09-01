import React, { useState, useContext } from "react";
// para san ulit ung useState at useContext?
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"; //not advisable way of importing??
import { Link, Router } from "react-router-dom";
import { GuestOptions } from "./GuestOptions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault(); //to prevent browser from reloading
  }

  //controlId is react-boostrap for setting id on FormControl and htmlFor on FormGroup.Label
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="pasword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <div>Forgot passoword?</div>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          <Link to="/dashboard">Login</Link>
        </Button>
        <hr />
        <Button block bsSize="large">
          Sign Up
        </Button>
        <div>
          <Link to="/guest"> Sign in as Guest</Link>
        </div>
      </form>
    </div>
  );
};
