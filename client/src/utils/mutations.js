import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation reset($username: String!, $password: String!) {
    reset(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const EMAIL_VERIFY = gql`
  mutation verifyEmail($forgotEmail: String!) {
    verifyEmail(email: $forgotEmail) {
      token
      user {
        _id
        security_ques
        security_ans
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($username:String!, $password: String!) {
    updatePassword(username: $username, password: $password) {
        _id
        username
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $full_name: String!
    $username: String!
    $email: String!
    $password: String!
    $security_ques: String!
    $security_ans: String!
    $resume_url: String!
  ) {
    #add user mutation call.
    addUser(
      full_name: $full_name
      username: $username
      email: $email
      password: $password
      security_ques: $security_ques
      security_ans: $security_ans
      resume_url: $resume_url
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;


