import React, { useState } from "react";
import axios from "axios";
import { EntryPage, Title, Upload } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import OptionList from "../components/OptionList";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Swal from 'sweetalert2';

const Signup = () => {
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityQues, setSecurityQues] = useState("");
  const [securityAns, setSecurityAns] = useState("");

  const formState = {
    full_name: fullName.toUpperCase(),
    email: email.trim(),
    username: username.toLowerCase().trim(),
    password: password.trim(),
    security_ques: securityQues,
    security_ans: securityAns.toLowerCase().trim(),
    resume_url: "",
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
        formState.resume_url = resumeRes.data.secure_url
    } catch (err) {
      err.message = 'Unable to upload resume'
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to sign up',
        text: err.message,
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
  try {
      //Saving New User
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      let errors = {}
      const errMsg = e.message
      const allErrors = errMsg.substring(errMsg.indexOf(':') + 1).trim()
      const allErrorsInArrayFormat = allErrors.split(',').map(err => err.trim())
      allErrorsInArrayFormat.forEach(error => {
        const [key, value] = error.split(':').map(err => err.trim())
        errors[key] = value
      })
      let msg = Object.values(errors)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to sign up',
        html: msg.join('<br>'),
        showConfirmButton: false,
        timer: 2000
      })
    }
  };

  return (
    <EntryPage style={{'height': '100%', 'overflow':'auto', marginTop: 120, 'paddingBottom': '100px'}}>
      <EntryCard>
        <Title>
          <h2>CREATE ACCOUNT</h2>
        </Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label className='required' htmlFor="signup-name">Full Name</label>
            <Input
              type="text"
              placeholder=""
              id="signup-name"
              autoComplete="off"
              onChange={(e) => setFullName(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label className='required' htmlFor="signup-email">Email Address</label>
            <Input
              type="text"
              placeholder=""
              id="signup-email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label className='required' htmlFor="signup-username">Username</label>
            <Input
              type="text"
              placeholder=""
              id="signup-username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label className='required' htmlFor="signup-password">Password</label>
            <Input
              type="password"
              placeholder="Min 8 characters"
              id="signup-password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <p className='required text-secondary' style={{textAlign: "left"}}> Security Question</p>
          <OptionList selectedQuestion={setSecurityQues} />
          <br />
          <InputGroup>
            <label className='required' htmlFor="signup-answer">Answer</label>
            <Input
              type="password"
              placeholder="Answer"
              id="signup-answer"
              autoComplete="off"
              onChange={(e) => setSecurityAns(e.target.value)}
            ></Input>
          </InputGroup>
          <p className='required text-secondary' style={{textAlign: "left"}}>Resume:</p>
          <Upload>
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </Upload>
          <br />
          <br />
          <Button type="submit" onClick={handleRegister}>
            Sign up
          </Button>
        </form>
      </EntryCard>
    </EntryPage>
  );
};

export default Signup;
