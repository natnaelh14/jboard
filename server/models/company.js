const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  job_position: {
    type: String,
    required: true,
  },
  job_status: {
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
    type: Number
  },
  application_date: {
    type: Date,
    default: Date.now    
  },
  interview_date: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
 },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
