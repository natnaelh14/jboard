const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/user");
const Job = require("../models/job");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    jobs: async (parent, { filters }, context) => {
      //Handling Jobs Filter
      try {
        let _filters = [];
        _filters.push({ user_id: { $in: [context.user._id] } });

        if (filters?.ids) {
          _filters.push({ _id: { $in: filters.ids } });
        }

        if (filters?.company_names) {
          _filters.push({ company_name: { $in: filters.company_names } });
        }
        if (filters?.job_positions) {
          _filters.push({ job_position: { $in: filters.positions } });
        }
        if (filters?.job_status) {
          _filters.push({ job_status: { $in: filters.job_status } });
        }
        return Job.find(..._filters);
      } catch (e) {
        throw e
      }
    },
    me: (parent, args, context) => {
      return context.user;
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
        const user = await User.findOne({ username }).select("+password");
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
        //If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        const token = signToken(user);
        return { token, user };
      } catch (e) {
        throw new Error(e);
      }
    },
    verifyEmail: async (parent, { email }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
        const token = signToken(user);
        return { token, user };
      } catch (e) {
        throw e;
      }
    },
    updatePassword: async (parent, { username, password }) => {
      // Find and update the matching using using the destructured args
      const user = await User.findOneAndUpdate(
        { username },
        { password: await bcrypt.hash(password, 10) },
        // Return the newly updated object instead of the original
        { new: true }
      );
      return user;
    },

    addJob: async (
      parent,
      {
        company_name,
        job_position,
        job_comment,
        label,
        offer_amount,
        application_date,
        interview_date,
        company_logo,
        company_url,
        job_status,
      },
      context
    ) => {
      try {
        let job = await Job.create({
          company_name,
          job_position,
          job_comment,
          label,
          offer_amount,
          application_date,
          interview_date,
          company_logo,
          company_url,
          user_id: context.user._id,
          job_status,
        });

        return job;
      } catch (error) {}
    },
    updateJob: async (parent, {company_name,
      job_position,
      job_comment,
      label,
      offer_amount,
      application_date,
      interview_date,
      company_logo,
      company_url,
      job_status,
      _id}) => {
      // Find and update the matching using using the destructured args
      const job = await Job.findOneAndUpdate(
        { _id },
        {
          company_name,
          job_position,
          job_comment,
          label,
          offer_amount,
          application_date,
          interview_date,
          company_logo,
          company_url,
          job_status,
        }
        ,
        // Return the newly updated object instead of the original
        { new: true }
      );
      return job;
    },
    deleteJob: async (parent, { _id }) => {
      try {
        return await Job.findOneAndRemove({ _id });
    
      } catch (e) {
        return e
      }
    },
  },
};

module.exports = resolvers;
