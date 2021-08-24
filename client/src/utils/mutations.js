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

export const ADD_COMPANY = gql`
  mutation addCompany(
    $company_name: String!
    $job_position: String!
    $job_status: String!
    $job_comment: String!
    $label: String!
    $offer_amount: String!
    $company_logo: String!
    $company_url: String!
    $application_date: String!
    $interview_date: String!
  ) {
    #add company mutation call.
    addCompany(
      company_name: $company_name
      job_position: $job_position
      job_status: $job_status
      job_comment: $job_comment
      label: $label
      offer_amount: $offer_amount
      company_logo: $company_logo
      company_url: $company_url
      application_date: $application_date
      interview_date: $interview_date
    ) {
      token
      #user {
      #  _id
      #  username
     # }
    }
  }
`;
