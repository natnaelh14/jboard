import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ADD_COMPANY } from "../../../utils/mutations";
import StatusOptionList from "../../StatusOptionList";
import { useMutation } from "@apollo/client";

export const Form = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [optionList, setOptionList] = useState("");
  const [jobComment, setJobComment] = useState("");
  const [jobLabel, setLabel] = useState("");
  const [offerAmount, setOfferAmount] = useState("");
  const [applicationDate, setApplicationDate] = useState(new Date());
  const [interviewDate, setInterviewDate] = useState(new Date());

  const formState = {
    company_name: companyName,
    job_position: jobPosition,
    job_status: optionList,
    job_comment: jobComment,
    label: jobLabel,
    offer_amount: offerAmount,
    applicationDate,
    interviewDate,
    company_logo:"",
    company_url:""
  };

  const [addCompany, { error, data }] = useMutation(ADD_COMPANY);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const company = formState.company_name;
      let issuesURL = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`;
      const response = await fetch(issuesURL);
      const resData = await response.json();
      if (resData) {
        formState.company_url = resData[0].domain;
        formState.company_logo = resData[0].logo;
      }
      console.log(formState)
      //Saving New Company
      // const { data } = await addCompany({
      //   variables: { ...formState },
      // });
      console.log(formState);
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>NEW COMPANY</p>
      <div className="form-group">
        <label htmlFor="name">Company Name</label>
        <input
          onChange={(e) => setCompanyName(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Position</label>
        <input
          onChange={(e) => setJobPosition(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Status</label>
        <StatusOptionList selectedStatus={setOptionList} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Comment</label>
        <input
          onChange={(e) => setJobComment(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Label</label>
        <input
          onChange={(e) => setLabel(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Offer Amount</label>
        <input
          onChange={(e) => setOfferAmount(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Application Date</label>
        <DatePicker
          selected={applicationDate}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setApplicationDate(date)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Interview Date</label>
        <DatePicker
          selected={interviewDate}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setInterviewDate(date)}
        />
      </div>
      <br />
      <div className="form-group">
        <button
          className="form-control btn btn-primary"
          onClick={handleRegister}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
