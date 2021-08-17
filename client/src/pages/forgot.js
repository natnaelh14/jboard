import { React, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EntryPage, Title } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import companyLogo from '../img/logo.png';


export default class Forgot extends Component {
  handleForgot = (e) => {
    e.preventDefault();
    const data = {
      forgot_email: this.forgot_email,
      forgot_answer: this.forgot_answer,
    };
    console.log("forgot info", data);
    axios
      .post("http://localhost:3000/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render () {
  return (
    <EntryPage>
      <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
      <EntryCard>
        <Title>
          <h2>FORGOT PASSWORD</h2>
        </Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="forgot-email">What is your e-mail address?</label>
            <Input type="text" placeholder="Enter your e-mail" id="forgot-email" onChange={(e) => (this.forgot_email = e.target.value)} ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="security-question" >What is your mother's maiden name?</label>
            <Input type="text" placeholder="Answer" id="security-answer"onChange={(e) => (this.forgot_answer = e.target.value)} ></Input>
          </InputGroup>
          <Button type="submit" onClick={this.handleForgot} >Forgot Password</Button>
        </form>
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
  }
}
