import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import companyLogo from "../img/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  const formState = {
    username: username,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('ghost', formState)
      // const { data } = await login({
      //   variables: { ...formState },
      // });

      // Auth.login(data.login.token);
    } catch (e) {
      console.log('unable to log in', e)
    }
  };

    return (
      <EntryPage>
        <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
        <EntryCard>
          <Title>
            <h2>LOG IN</h2>
          </Title>
          <form onClick={handleLogin}>
            <InputGroup>
              <label htmlFor="login-username">Username</label>
              <Input
                type="text"
                placeholder=""
                id="login-username"
                onChange={(e) => setUsername(e.target.value)}
              ></Input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="login-password">Password</label>
              <Input
                type="password"
                placeholder="Min 8 characters"
                id="login-password"
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </InputGroup>
            <Button type="submit" >
              Log in
            </Button>
          </form>
          <span>
            <Link to="/signup">Register new account</Link>
            <br />
            <br />
            <Link to="/forgot">Forgot Password</Link>
          </span>
        </EntryCard>
      </EntryPage>
    );
}

export default Login;