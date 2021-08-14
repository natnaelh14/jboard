import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link style={{ marginRight: "8px" }} to="/login">
        Log in
      </Link>
      <Link to="/signup">Sign up</Link>
    </>
  );
}

export default Home;
