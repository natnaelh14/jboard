const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/user");
const Company = require("../models/company");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("companies");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("companies");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    companies: async () => {
      return await Company.find({});
    },
  },

  Mutation: {
    addUser: async (
      parent,
      {
        full_name,
        username,
        email,
        password,
        security_ques,
        security_ans,
        resume_url,
      }
    ) => {
      const user = await User.create({
        full_name,
        username,
        email,
        password,
        security_ques,
        security_ans,
        resume_url,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
