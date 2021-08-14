import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

function Signup() {
  return (
      <EntryPage>
        <PageHeader to="/">Jboard</PageHeader>
        <EntryCard>
            <h2>Sign up</h2>
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
              <Button type="submit" full>Sign up</Button>
            </form>
            <span>
              Already have an account?
              <Link to='/login'>Log in</Link>
            </span>
        </EntryCard>
      </EntryPage>
  );
}

export default Signup;
