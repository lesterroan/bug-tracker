import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../Routes";

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );

  class SignUpForm extends Component {
    constructor(props) {
      super(props);
    }

    onSubmit = (event) => {};

    onChange = (event) => {};

    render() {
      return <form onSubmit={this.onSubmit}></form>;
    }
  }
}

const SignUpLink = () => <p>Don't have an account?</p>;

export default Signup;
