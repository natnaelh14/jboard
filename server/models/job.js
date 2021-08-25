const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  job_position: {
    type: String,
    required: true,
  },
  job_comment: {
    type: String,
  },
  label: {
    type: String,
  },
  offer_amount: {
    type: Number,
    required: true
  },
  application_date: {
    type: Date,
    default: Date.now    
  },
  interview_date: {
    type: Date,
    default: Date.now
  },
  company_logo: {
    type: String,

  },
  company_url: {
    type: String,
  },
  job_status: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
 },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
