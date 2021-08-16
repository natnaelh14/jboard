import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, Title } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import companyLogo from '../img/logo.png';


function Forgot() {
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
            <Input type="text" placeholder="Enter your e-mail" id="forgot-email"></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="security-question" >What is your mother's maiden name?</label>
            <Input type="text" placeholder="Answer" id="security-answer"></Input>
          </InputGroup>
          <Button type="submit" full>Forgot Password</Button>
        </form>
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Forgot;