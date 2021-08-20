import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { EntryPage, Title, Upload } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import OptionList from "../components/OptionList";
import companyLogo from "../img/logo.png";

const Signup = () => {
  const [formState, setFormState] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    image: "",
    resume_url: "",
    security_ques: "",
    security_ans: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    //const { name, value } = event.target;
    const name =  event.target.name;
    const value = (name === "image") ? event.target.files[0] : event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  
  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      //API call to upload resume and receive a pdf url file
      const urlData = new FormData();
      urlData.append("upload_preset", "resume");
      // urlData.append("file", image);
      console.log("data", urlData);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/doalzf6o2/image/upload`,
        urlData
      );
      if (res) {
        console.log(res);
        // setUrl(res.data.secure_url);
        setFormState({
          ...formState,
          'resume_url': res.data.secure_url
        });
      }
      //Saving New User
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
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
              placeholder="Your Full Name"
              id="signup-name"
              value={formState.full_name}
              onChange={handleChange}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>
            <Input
              type="text"
              placeholder="Your email"
              id="signup-email"
              value={formState.email}
              onChange={handleChange}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-username">Username</label>
            <Input
              type="text"
              placeholder="Your username"
              id="signup-username"
              value={formState.username}
              onChange={handleChange}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <Input
              type="password"
              placeholder="******"
              id="signup-password"
              value={formState.password}
              onChange={handleChange}
            ></Input>
          </InputGroup>
          <p style={{ textAlign: "left" }}>Security Question</p>
          <br />
          <OptionList selectedQuestion={formState.security_ques} />
          <br />
          <InputGroup>
            <label htmlFor="signup-answer">Answer</label>
            <Input
              type="password"
              placeholder="Answer"
              id="signup-answer"
              value={formState.security_ans}
              onChange={handleChange}
            ></Input>
          </InputGroup>
          <br />
          <br />
          <Upload>
            <label>Resume:</label>
            <input type="file" onChange={handleChange} />
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
