import { React, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import companyLogo from "../img/logo.png";

export default class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
    };
    console.log("login info", data);
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <EntryPage>
        <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
        <EntryCard>
          <Title>
            <h2>LOG IN</h2>
          </Title>
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGroup>
              <label htmlFor="login-username">Username</label>
              <Input
                type="text"
                placeholder=""
                id="login-username"
                onChange={(e) => (this.username = e.target.value)}
              ></Input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="login-password">Password</label>
              <Input
                type="password"
                placeholder="Min 8 characters"
                id="login-password"
                onChange={(e) => (this.password = e.target.value)}
              ></Input>
            </InputGroup>
            <Button type="submit" onClick={this.handleLogin}>
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
}
