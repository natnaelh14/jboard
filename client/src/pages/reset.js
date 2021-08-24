import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import Auth from '../utils/auth';


const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    const formState = {
      new_password: newPassword,
    };

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
    console.log(formState);
    }
  };

  return (
    <EntryPage>
      <EntryCard>
        <Title>
          <h2>RESET PASSWORD</h2>
        </Title>
        <form onClick={handleReset}>
          <InputGroup>
            <label htmlFor="forgot-username">Username: {Auth.getUser().data.username}</label>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password">New Password</label>
            <Input
              type="password"
              placeholder=""
              id="reset-password"
              onChange={(e) => setNewPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password">Confirm Password</label>
            <Input
              type="password"
              placeholder=""
              id="reset-confirm"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <Button type="submit" full>
            Reset Password
          </Button>
        </form>
      </EntryCard>
    </EntryPage>
  );
};

export default Reset;
