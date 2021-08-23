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
      return User.findOne({ username })
    },
    email: async (parent, { email }) => {
      return await User.findOne({ email })
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
      //we run our signed token and add the value of user into it.
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      try {
        // Look up the user by the provided username. Since the `username` field is unique, we know that only one person will exist with that username
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
        //If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
        const correctPw = await user.isCorrectPassword(password);
        console.log(correctPw)
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        const token = signToken(user);
        return { token, user };
      } catch (e) {
        console.log("log in error", e);
      }
    },
    verifyEmail: async (parent,{email}) => {
      console.log('verify email')
      try {
        const user = await User.findOne({ email })
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
        // const correctPw = await user.isCorrectPassword(password);
        // console.log(correctPw)
        // if (!correctPw) {
        //   throw new AuthenticationError("Incorrect credentials");
        // }
        const token = signToken(user);
        return { token, user };
      } catch (e) {
        console.log("log in error", e);
      }
    }
  },
};

module.exports = resolvers;
