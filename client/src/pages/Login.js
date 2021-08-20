import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import companyLogo from "../img/logo.png";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      email: '',
      password: '',
    });
  };
    return (
      <EntryPage>
        <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
        <EntryCard>
          <Title>
            <h2>LOG IN</h2>
          </Title>
          <form onSubmit={handleLogin}>
            <InputGroup>
              <label htmlFor="login-username">Username</label>
              <Input
                type="text"
                placeholder=""
                id="login-username"
                value={formState.email}
                onChange={handleChange}
              ></Input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="login-password">Password</label>
              <Input
                type="password"
                placeholder="Min 8 characters"
                id="login-password"
                value={formState.password}
                onChange={handleChange}
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
            <Link to="/forgot">Reset password</Link>
          </span>
        </EntryCard>
      </EntryPage>
    );
  }

  export default Login;