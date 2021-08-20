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

const Signup = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityQues, setSecurityQues] = useState("");
  const [securityAns, setSecurityAns] = useState("");

  const userData = {
    full_name: fullName,
    email: email,
    username: username,
    password: password,
    security_ques: securityQues,
    security_ans: securityAns,
    resumeUrl: url
  };

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try{
    console.log('image', image)
    const data = new FormData();
    data.append('upload_preset', 'resume');
    data.append("file", image);
    console.log("data", data);
    const res = await axios.post(`https://api.cloudinary.com/v1_1/doalzf6o2/image/upload`, data)
      if (res) {
        console.log(res)
        setUrl(res.data.secure_url)
      }
      console.log('resume', userData)
     const newUser = await axios
        .post("http://localhost:3000/signup", {...userData, resumeUrl:res.data.secure_url})
      console.log('newUser', newUser)

    } catch (e) {
      console.log(e)
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
          <OptionList
          selectedQuestion={setSecurityQues}
          // onChange={(e) => setSecurityQues(e.target.value)}
          />
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
