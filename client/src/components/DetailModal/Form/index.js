import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatusOptionList from "../../StatusOptionList";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { ADD_JOB } from "../../../utils/mutations";
import { MixedCheckbox } from "@reach/checkbox";

export const Form = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [optionList, setOptionList] = useState("");
  const [jobComment, setJobComment] = useState("");
  const [jobLabel, setLabel] = useState("");
  const [offerAmount, setOfferAmount] = useState("");
  const [applicationDate, setApplicationDate] = useState(new Date());
  const [interviewDate, setInterviewDate] = useState(new Date());
  const [addJob, { error, data }] = useMutation(ADD_JOB);

  const formState = {
    company_name: companyName,
    job_position: jobPosition,
    job_status: optionList,
    job_comment: jobComment,
    label: jobLabel,
    offer_amount: Number.parseInt(offerAmount),
    applicationDate,
    interviewDate,
    company_logo: "",
    company_url: "",
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      {
        formState.label
          ? (formState.label = "favorite")
          : (formState.label = "");
      }
      const company = formState.company_name;
      let issuesURL = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`;
      if (!issuesURL) return;
      const response = await fetch(issuesURL);
      const resData = await response.json();
      if (resData) {
        formState.company_url = resData[0].domain;
        formState.company_logo = resData[0].logo;
      } else {
        throw Error;
      }
      console.log(formState);

      try {
        let { data } = await addJob({
          variables: { ...formState },
        });
        console.log("created job", data);
      } catch (error) {
        console.log("addjob mutation failed", error);
      }
      //Pop up message for successfully saving job info
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Job added",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.assign("/dashboard");
    } catch (error) {
      //Error message on form registration.
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Unable to add company, Please review your input.",
        showConfirmButton: false,
        timer: 1500,
      });
      // return;
    }
  };

  return (
    <form onSubmit={onSubmit} >
      <div class="avatar" >
        <img
          src="https://logo.clearbit.com/amazon.com"
          alt="Avatar"
          className="center-block"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Company Name</label>
        <input
          onChange={(e) => setCompanyName(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Position</label>
        <input
          onChange={(e) => setJobPosition(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Status</label>
        <StatusOptionList selectedStatus={setOptionList} />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Comment</label>
        <input
          onChange={(e) => setJobComment(e.target.value)}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Offer Amount</label>
        <input
          onChange={(e) => setOfferAmount(e.target.value)}
          type="number"
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Application Date</label>
        <DatePicker
          selected={applicationDate}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setApplicationDate(date)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Interview Date</label>
        <DatePicker
          selected={interviewDate}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setInterviewDate(date)}
        />
      </div>
      <br />
      <div className="form-group form-check">
        <label>Favorite</label>&nbsp;&nbsp;
        <MixedCheckbox
          value="favorite"
          checked={jobLabel}
          onChange={(event) => {
            setLabel(event.target.checked);
          }}
        />
      </div>
      <br />
      <div className="form-group">
        <button
          className="form-control btn btn-primary"
          onClick={console.log("Hello")}
          type="submit"
        >
          EDIT
        </button>
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
