import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EntryPage, Title, Upload } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import OptionList from "../components/OptionList";
import companyLogo from "../img/logo.png";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityQues, setSecurityQues] = useState("");
  const [securityAns, setSecurityAns] = useState("");

  const formState = {
    full_name: fullName,
    email: email,
    username: username,
    password: password,
    security_ques: securityQues,
    security_ans: securityAns,
    resume_url: '',
  };

  //Invoke 'use mutation' hook that was declared in the utils/mutation file.
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      //API call to upload resume and receive a pdf url file
      const resumeData = new FormData();
      resumeData.append("upload_preset", "resume");
      resumeData.append("file", image);
      const resumeRes = await axios.post(
        `https://api.cloudinary.com/v1_1/doalzf6o2/image/upload`,
        resumeData
      );
      if (resumeRes) {
        formState.resume_url = resumeRes.data.secure_url
      }
      //Saving New User
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log('unable to sign up', e);
    }
  };

  return (
    <EntryPage>
      <img src={companyLogo} alt="jboard logo" height="200px" width="200px" />
      <EntryCard>
        <Title>
          <h2>CREATE YOUR FREE ACCOUNT</h2>
        </Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label>
            <Input
              type="text"
              placeholder=""
              id="signup-name"
              onChange={(e) => setFullName(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>
            <Input
              type="text"
              placeholder=""
              id="signup-email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-username">Username</label>
            <Input
              type="text"
              placeholder=""
              id="signup-username"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <Input
              type="password"
              placeholder="Min 8 characters"
              id="signup-password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <p style={{ textAlign: "left" }}>Security Question</p>
          <br />
          <OptionList selectedQuestion={setSecurityQues} />
          <br />
          <InputGroup>
            <label htmlFor="signup-answer">Answer</label>
            <Input
              type="password"
              placeholder="Answer"
              id="signup-answer"
              onChange={(e) => setSecurityAns(e.target.value)}
            ></Input>
          </InputGroup>
          <br />
          <br />
          <Upload>
            <label>Resume:</label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </Upload>
          <br />
          <br />
          <Button type="submit" onClick={handleRegister}>
            Sign up
          </Button>
        </form>
        <span>
          Already have a Jboard account?
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Signup;
