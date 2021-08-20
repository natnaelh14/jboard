import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import companyLogo from "../img/logo.png";

const Forgot = () => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotAnswer, setForgotAnswer] = useState("");
  const formState = {
    forgot_email: forgotEmail,
    forgot_answer: forgotAnswer,
  };
  const handleForgot = (e) => {
    e.preventDefault();
    console.log("forgot info", formState);
  };

  return (
    <EntryPage>
      <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
      <EntryCard>
        <Title>
          <h2>FORGOT PASSWORD</h2>
        </Title>
        <form onClick={handleForgot}>
          <InputGroup>
            <label htmlFor="forgot-email">What is your e-mail address?</label>
            <Input
              type="text"
              placeholder="Enter your e-mail"
              id="forgot-email"
              onChange={(e) => setForgotEmail(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="security-question">
              What is your mother's maiden name?
            </label>
            <Input
              type="text"
              placeholder="Answer"
              id="security-answer"
              onChange={(e) => setForgotAnswer(e.target.value)}
            ></Input>
          </InputGroup>
          <Button type="submit">Forgot Password</Button>
        </form>
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Forgot;
