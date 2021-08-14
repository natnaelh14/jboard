import React from "react";
import { Link } from "react-router-dom";
import { EntryPage } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import OptionList from '../components/OptionList';
import companyLogo from '../img/logo.png';

function Signup() {
  return (
      <EntryPage>
        <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
        <EntryCard>
            <h2>Create your free account</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <InputGroup>
                <label htmlFor="signup-name">Full Name</label>
                <Input type="text" placeholder="Full Name" id="signup-name"></Input>
              </InputGroup>
              <InputGroup>
                <label htmlFor="signup-email">Email Address</label>
                <Input type="text" placeholder="Email Address" id="signup-email"></Input>
              </InputGroup>
              <InputGroup>
                <label htmlFor="signup-username">Username</label>
                <Input type="text" placeholder="Username" id="signup-username"></Input>
              </InputGroup>
              <InputGroup>
                <label htmlFor="signup-password">Password</label>
                <Input type="password" placeholder="Password" id="signup-password"></Input>
              </InputGroup>
              <OptionList />
              <br />
              <InputGroup>
                <label htmlFor="signup-answer">Answer</label>
                <Input type="password" placeholder="Answer" id="signup-answer"></Input>
              </InputGroup>
              <Button type="click" full>Upload Resume</Button>
              <br />
              <br />
              <Button type="submit" full>Sign up</Button>
            </form>
            <span>
              Already have a Jboard account?
              <Link to='/login'>Log in</Link>
            </span>
        </EntryCard>
      </EntryPage>
  );
}

export default Signup;
