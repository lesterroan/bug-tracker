import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const GuestOptions = () => {
  return (
    <div>
      <div>
        <button>Admin</button>
        <button>Project Manager</button>
        <button>Developer</button>
        <button>Submitter</button>
      </div>
      <Link to="/">Already Have an Account?</Link>
    </div>
  );
};
