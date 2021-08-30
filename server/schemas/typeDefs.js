const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar ISODate

  type User {
    _id: ID!
    full_name: String!
    username: String!
    email: String!
    password: String!
    security_ques: String!
    security_ans: String!
    resume_url: String!
  }

  type Job {
    _id: ID!
    company_name: String!
    job_position: String!
    job_status: String!
    job_comment: String
    label: String
    offer_amount: Int
    application_date: ISODate
    interview_date: ISODate
    company_url: String
    company_logo: String
    user_id: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  input JobFilterInput {
    company_names: [String]
    ids: [ID]
    job_status: [String],
    job_positions: [String]
    user_ids: [ID]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    email: User
    jobs(filters: JobFilterInput):[Job]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(
      full_name: String!
      username: String!
      email: String!
      password: String!
      security_ques: String!
      security_ans: String!
      resume_url: String!
    ): Auth
    verifyEmail(email: String!): Auth
    updatePassword(username: String!, password: String!): User
    updateJob(
      company_name: String!
      job_position: String!
      job_status: String!
      job_comment: String
      label: String
      offer_amount: Int
      application_date: ISODate
      interview_date: ISODate
      company_url: String
      company_logo: String
      _id: ID!
    ):Job!
    deleteJob(_id:ID!): Job!
    addJob(
      company_name: String!
      job_position: String!
      job_status: String!
      job_comment: String
      label: String
      offer_amount: Int
      application_date: ISODate
      interview_date: ISODate
      company_url: String
      company_logo: String
    ): Job!
  }
`;

module.exports = typeDefs;
