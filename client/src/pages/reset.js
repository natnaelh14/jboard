import React from "react";
import { Link } from "react-router-dom";
import { EntryPage } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import companyLogo from '../img/logo.png';


function Reset() {
  return (
    <EntryPage>
      <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
      <EntryCard>
        <h2>Reset Password</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="forgot-username">Username: natnael_haile</label>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password">New Password</label>
            <Input type="password" placeholder="" id="reset-password"></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password" >Confirm Password</label>
            <Input type="password" placeholder="" id="reset-confirm"></Input>
          </InputGroup>
          <Button type="submit" full>Reset Password</Button>
        </form>
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Reset;