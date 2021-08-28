import React, { useState, useEffect } from "react";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import { EMAIL_VERIFY } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth'; //import Auth feature that we created, which will be the decoder

const Forgot = () => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotAnswer, setForgotAnswer] = useState("");
  const [firstDisabledInput, setFirstDisabledInput] = useState("");
  const [nextButtonColor, setNextButtonColor] = useState("");
  const [secondDisabledInput, setSecondDisabledInput] = useState(true);
  const [forgotButtonColor, setForgotButtonColor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorTwoMessage, setErrorTwoMessage] = useState("");
  const [security_question, setSecurityQuestion] = useState("");

  const formState = {
    forgotEmail,
    forgotAnswer,
    firstDisabledInput,
    nextButtonColor,
    errorMessage,
    errorTwoMessage,
    secondDisabledInput,
    forgotButtonColor,
    security_question,
  };
  useEffect(() => {
    setForgotButtonColor('gray')
  }, []);
  const [verifyEmail, { error, data }] = useMutation(EMAIL_VERIFY);

  const handleNext = async (e) => {
    e.preventDefault();
    try {
      const { data } = await verifyEmail({
        variables: { forgotEmail },
      });
      if (data) {
        setForgotButtonColor("")
        setFirstDisabledInput(true);
        setSecurityQuestion(data.verifyEmail.user.security_ques);
        setSecondDisabledInput(false);
        setNextButtonColor("gray")
      }
    } catch (error) {
      setForgotEmail("");
      setSecurityQuestion("");
      setForgotButtonColor('gray')
      setSecondDisabledInput(true);
      setFirstDisabledInput(false);
      setErrorMessage("Invalid email input");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    
    try {
      if ((formState.forgotAnswer).toLowerCase().trim() === data.verifyEmail.user.security_ans) {
        Auth.login(data.verifyEmail.token);
        window.location.assign('/reset');
      } else {
        throw error;
      }
    } catch (e) {
      setErrorTwoMessage("Invalid Security Answer");
      setTimeout(() => {
        setErrorTwoMessage("");
      }, 2000);
    }
  };

  return (
    <EntryPage style={{'height': '100%', 'overflow':'auto', marginTop: 120}}>
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
          <br />
          <br />
          <p style={{"color": "rgb(249 143 134)", "fontSize": "1.2rem"}}>{formState.errorMessage}</p>
        </form>
        <br />
        <br />
        <form>
          <InputGroup>
            <label htmlFor="security-question" >
              {formState.security_question}
            </label>
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
          <br />
          <br />
          <p style={{"color": "rgb(249 143 134)", "fontSize": "1.2rem"}}>{formState.errorTwoMessage}</p>
        </form>
      </EntryCard>
    </EntryPage>
  );
};

export default Forgot;
