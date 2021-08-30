import React, { useState } from "react";
import { EntryPage, Title } from "./style";
import EntryCard from "../components/EntryCard";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../utils/mutations";
import Swal from "sweetalert2";

const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formState = {
    password: newPassword.trim(),
  };

  const [updatePassword, { error, data }] = useMutation(UPDATE_PASSWORD);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      if(formState.password.length < 8) {
        throw Error;
      }
      if ((newPassword && confirmPassword) && newPassword === confirmPassword) {
        await updatePassword({
          variables: { password: formState.password, username: Auth.getUser().data.username },
        });
       await Swal.fire({
          position: "center",
          icon: "success",
          title: 'Password updated',
          showConfirmButton: false,
          timer: 1500,
        });
      window.location.assign('/dashboard')
      } else {
        throw Error
      }
    } catch (e) {
       e.message = ['Passwords must match', 'Password has to be a minimum of 8 characters'];
       Swal.fire({
        position: "center",
        icon: "error",
        title: 'Unable to reset password',
        html: e.message.join('<br>'),
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <EntryPage style={{'height': '100%', 'overflow':'auto', marginTop: 120}}>
      <EntryCard>
        <Title>
          <h2>RESET PASSWORD</h2>
        </Title>
        <form >
          <InputGroup>
            <label htmlFor="forgot-username">
              Username: {Auth.getUser().data.username}
            </label>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password">New Password</label>
            <Input
              type="password"
              placeholder="Minimum 8 characters."
              id="reset-password"
              autoComplete="off"
              onChange={(e) => setNewPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="reset-password">Confirm Password</label>
            <Input
              type="password"
              placeholder="Minimum 8 characters."
              id="reset-confirm"
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </InputGroup>
          <Button type="submit" onClick={handleReset} full>
            Reset Password
          </Button>
        </form>
      </EntryCard>
    </EntryPage>
  );
};

export default Reset;
