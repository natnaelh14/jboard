import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      full_name
      username
      email
      password
      security_ques
      security_ans
      resume_url
    }
  }
`;