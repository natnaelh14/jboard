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
