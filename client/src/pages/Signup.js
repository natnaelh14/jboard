import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <h1>sign up page.</h1>
      <span>
        Already have an account?
        <Link to="/login">Log in</Link>
      </span>
      <br />
      <span>
        Go back <Link to="/">Home</Link>
      </span>
    </>
  );
}

export default Signup;
