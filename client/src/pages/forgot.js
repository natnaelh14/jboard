import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import { useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Forgot = () => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotAnswer, setForgotAnswer] = useState("");
  const [firstDisabledInput, setFirstDisabledInput] = useState("");
  const [nextButtonColor, setNextButtonColor] = useState("");
  const [secondDisabledInput, setSecondDisabledInput] = useState("");
  const [forgotButtonColor, setForgotButtonColor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formState = {
    forgotEmail,
    forgotAnswer,
    firstDisabledInput,
    nextButtonColor,
    errorMessage,
    secondDisabledInput: "disabled",
    forgotButtonColor: "gray",
  };
  const [search, { loading, data, error }] = useLazyQuery(QUERY_USER, {
    variables: { username: "james_patrick" },
  });

  const handleNext = async (e) => {
    e.preventDefault();
    await search();
    console.log(data);

    // search();
    // if (error) return `Error! ${error.message}`;
  };

  const handleForgot = async (e) => {
    e.preventDefault();
  };

  return (
    <EntryPage>
      <EntryCard>
        <Title>
          <h2>FORGOT PASSWORD</h2>
        </Title>
        <form>
          <InputGroup>
            <label htmlFor="forgot-email">What is your e-mail address?</label>
            <Input
              type="text"
              placeholder="Enter your e-mail"
              id="forgot-email"
              disabled={formState.firstDisabledInput}
              onChange={(e) => setForgotEmail(e.target.value)}
            ></Input>
          </InputGroup>
          <Button
            type="submit"
            onClick={handleNext}
            disabled={formState.firstDisabledInput}
            style={{ backgroundColor: formState.nextButtonColor }}
          >
            Next
          </Button>
        </form>
        <br />
        <br />
        <form>
          <InputGroup>
            <label htmlFor="security-question"></label>
            <Input
              type="text"
              placeholder="Answer"
              id="security-answer"
              disabled={formState.secondDisabledInput}
              onChange={(e) => setForgotAnswer(e.target.value)}
            ></Input>
          </InputGroup>
          <Button
            type="submit"
            onClick={handleForgot}
            disabled={formState.secondDisabledInput}
            style={{ backgroundColor: formState.forgotButtonColor }}
          >
            Forgot Password
          </Button>
        </form>
        <span>
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Forgot;
