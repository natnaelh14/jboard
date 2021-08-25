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
export const QUERY_JOBS= gql`
query Query($jobsFilters: JobFilterInput) {
  jobs {
    company_name
    job_status
    job_position
    _id
    company_url
    company_logo
  }
}

`;

export const QUERY_JOB_DETAIL= gql`
query Query($jobsFilters: JobFilterInput) {
  jobs(filters: $jobsFilters) {
    _id
    company_name
    job_position
    job_status
    job_comment
    label
    offer_amount
    application_date
    interview_date
    company_url
    company_logo
    user_id
  }
}

`;
