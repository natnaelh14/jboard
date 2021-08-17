import { React, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import OptionList from "../components/OptionList";
import companyLogo from "../img/logo.png";

export default class Signup extends Component {
  handleRegister = (e) => {
    e.preventDefault();
    const data = {
      full_name: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password,
      security_ques: this.question,
      security_ans: this.answer,
    };
    console.log("signup info", data);
    axios
      .post("http://localhost:3000/signup", data)
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
            <h2>CREATE YOUR FREE ACCOUNT</h2>
          </Title>
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGroup>
              <label htmlFor="signup-name">Full Name</label>
              <Input
                type="text"
                placeholder=""
                id="signup-name"
                onChange={(e) => (this.fullName = e.target.value)}
              ></Input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="signup-email">Email Address</label>
              <Input
                type="text"
                placeholder=""
                id="signup-email"
                onChange={(e) => (this.email = e.target.value)}
              ></Input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="signup-username">Username</label>
              <Input
                type="text"
                placeholder=""
                id="signup-username"
                onChange={(e) => (this.username = e.target.value)}
              ></Input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="signup-password">Password</label>
              <Input
                type="password"
                placeholder="Min 8 characters"
                id="signup-password"
                onChange={(e) => (this.password = e.target.value)}
              ></Input>
            </InputGroup>
            <OptionList onChange={(e) => (this.question = e.target.value)} />
            <br />
            <InputGroup>
              <label htmlFor="signup-answer">Answer</label>
              <Input
                type="password"
                placeholder="Answer"
                id="signup-answer"
                onChange={(e) => (this.answer = e.target.value)}
              ></Input>
            </InputGroup>
            <Button type="click" full>
              Upload Resume
            </Button>
            <br />
            <br />
            <Button type="submit" onClick={this.handleRegister}>
              Sign up
            </Button>
          </form>
          <span>
            Already have a Jboard account?
            <Link to="/login">Log in</Link>
          </span>
        </EntryCard>
      </EntryPage>
    );
  }
}
