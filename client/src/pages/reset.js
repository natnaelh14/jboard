import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import companyLogo from "../img/logo.png";

const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (newPassword === confirmPassword) {
    var formState = {
      new_password: newPassword,
    };
  }
  const handleReset = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <EntryPage>
      <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
      <EntryCard>
        <Title>
          <h2>RESET PASSWORD</h2>
        </Title>
        <form onClick={handleReset}>
          <InputGroup>
            <label htmlFor="forgot-username">Username: natnael_haile</label>
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
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Reset;
