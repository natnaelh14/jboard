import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h1>Log in Page!</h1>
      <span>
        Don't have an account?
        <Link to="/signup">Sign up</Link>
      </span>
      <br />
      <span>
        Go back <Link to="/">Home</Link>
      </span>
    </>
  );
}

export default Login;
