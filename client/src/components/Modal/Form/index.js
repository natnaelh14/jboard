import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatusOptionList from '../../StatusOptionList'

 export const Form = ({ onSubmit }) => {
  const [applicationDate, setApplicationDate] = useState(new Date());
  const [interviewDate, setInterviewDate] = useState(new Date());
  const [optionList, setOptionList] = useState(new Date());

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Company Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Position</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Status</label>
        <StatusOptionList selectedStatus={setOptionList} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Job Comment</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Label</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="number">Offer Amount</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Application Date</label>
        <DatePicker selected={applicationDate} onChange={(date) => setApplicationDate(date)} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Interview Date</label>
        <DatePicker selected={interviewDate} onChange={(date) => setInterviewDate(date)} />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;