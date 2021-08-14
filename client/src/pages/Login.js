import React from "react";
import { Link } from "react-router-dom";
import { EntryPage } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import companyLogo from '../img/logo.png';


function Login() {
  return (
    <EntryPage>
      <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
      <EntryCard>
        <h2>Log in</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="login-username">Username</label>
            <Input type="text" placeholder="Username" id="login-username"></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="login-password" >Password</label>
            <Input type="password" placeholder="Password" id="login-password"></Input>
          </InputGroup>
          <Button type="submit" full>Log in</Button>
        </form>
        <span>
          <Link to="/signup">Sign up for an account</Link>
          <br />
          <br />
          <Link to="/forgot">Can't log in?</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Login;
