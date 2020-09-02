// import React, { useState, useContext } from "react";
// // para san ulit ung useState at useContext?
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap"; //not advisable way of importing??
// import { Link, Router } from "react-router-dom";
// import { GuestOptions } from "./GuestOptions";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault(); //to prevent browser from reloading
//   }

//   //controlId is react-boostrap for setting id on FormControl and htmlFor on FormGroup.Label
//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <FormLabel>Email</FormLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             type="pasword"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormGroup>
//         <div>Forgot passoword?</div>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           <Link to="/dashboard">Login</Link>
//         </Button>
//         <hr />
//         <Button block bsSize="large">
//           Sign Up
//         </Button>
//         <div>
//           <Link to="/guest"> Sign in as Guest</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Firebase";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <Form onSubmit={handleLogin}>
        <label>
          Emailqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </div>
  );
};

export default withRouter(Login);
