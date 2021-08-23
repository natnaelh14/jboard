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

  type Company {
    _id: ID!
    company_name: String!
    job_position: String!
    job_status: String!
    job_comment: String
    label: String
    offer_amount: Int
    application_date: ISODate
    interview_date: ISODate
    company_url: String!
    company_logo: String!
    user_id: [ID]
  }

  type Query {
    companies: [Company]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    email: User
  }

  type Mutation {
    login(username: String!, password: String!):Auth
    addUser(
      full_name: String!
      username: String!
      email: String!
      password: String!
      security_ques: String!
      security_ans: String!
      resume_url: String!
    ):Auth
    verifyEmail(email: String!): Auth
  }
`;

module.exports = typeDefs;
