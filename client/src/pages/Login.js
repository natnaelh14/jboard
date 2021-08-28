import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth"; //import Auth feature that we created, which will be the decoder
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const formState = {
    username: username.trim(),
    password: password.trim(),
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      //this is where we pass the token we created in utils/auth.js
      Auth.login(data.login.token);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Unable to sign in, Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <EntryPage>
      <EntryCard>
        <Title>
          <h2>LOG IN</h2>
        </Title>
        <form>
          <InputGroup>
            <label className='required' htmlFor="login-username">Username</label>
            <Input
              type="text"
              placeholder=""
              id="login-username"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label className='required' htmlFor="login-password">Password</label>
            <Input
              type="password"
              placeholder="Min 8 characters"
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <Button type="submit" onClick={handleLogin}>
            Log in
          </Button>
        </form>
        <span>
          <Link to="/forgot" style={{ textDecoration: "none" }}>
            Forgot password?
          </Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Login;
