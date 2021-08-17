import { React, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EntryPage, Title } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import companyLogo from '../img/logo.png';

export default class Reset extends Component {
  handleReset = (e) => {
    e.preventDefault();
    const data = {
      password: this.password,
    };
    console.log("reset info", data);
    axios
      .post("http://localhost:3000/reset", data)
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
          <h2>RESET PASSWORD</h2>
        </Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="forgot-username">Username: natnael_haile</label>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password">New Password</label>
            <Input type="password" placeholder="" id="reset-password" onChange={(e) => (this.password = e.target.value)}></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password" >Confirm Password</label>
            <Input type="password" placeholder="" id="reset-confirm"></Input>
          </InputGroup>
          <Button type="submit" full onClick={this.handleReset} >Reset Password</Button>
        </form>
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
  }
}
