// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type User {
//     _id: ID!
//     username: String!
//     email: String!
//     security_ques: String!
//     security_ans: String!
//   }

//   type Company {
//     _id: ID!
//     company_name: String!
//     job_position: String!
//     job_status: String!
//     job_comment: String
//     label: String
//     offer_amount: Number
//     application_date: Date
//     interview_date: Date
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     me: User
//   }

//   type Mutation {
//     login(username: String!, password: String!): Auth
//     addUser(
//       username: String!
//       email: String!
//       password: String!
//       security_ques: String!
//       security_ans: String!
//       resumeURL: String!
//     ): Auth
//     # saveBook(bookData: BookInput!): User
//     # removeBook(bookId: ID!): User
//   }
// `;

// module.exports = typeDefs;
