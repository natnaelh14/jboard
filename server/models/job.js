const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company_name: {
    type: String,
    required: [true, "Please provide a company name"],
  },
  job_position: {
    type: String,
    required: [true, "Please provide a job position"],
  },
  job_comment: {
    type: String,
  },
  label: {
    type: String,
  },
  offer_amount: {
    type: Number,
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
    required: [true, "Please provide a job status"],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
 },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
