import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddStatusOption from "../../AddStatusOption";
import { fromPromise, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { ADD_JOB } from "../../../utils/mutations";
import { MixedCheckbox } from "@reach/checkbox";
import { QUERY_JOBS } from "../../../utils/queries";
import "./form.css";

export const Form = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [optionList, setOptionList] = useState("");
  const [jobComment, setJobComment] = useState("");
  const [jobLabel, setLabel] = useState("");
  const [offerAmount, setOfferAmount] = useState("");
  const [applicationDate, setApplicationDate] = useState(new Date());
  const [interviewDate, setInterviewDate] = useState(new Date());
  const [addJob, { error, data }] = useMutation(ADD_JOB, {
    refetchQueries: [QUERY_JOBS],
  });

  const formState = {
    company_name: companyName,
    job_position: jobPosition,
    job_status: optionList,
    job_comment: jobComment,
    label: jobLabel,
    offer_amount: offerAmount,
    application_date: applicationDate,
    interview_date: interviewDate,
    company_logo: "",
    company_url: "",
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const company = formState.company_name;
      let issuesURL = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`;
      // if (!issuesURL) return;
      const response = await fetch(issuesURL);
      const resData = await response.json();
      if (resData) {
        formState.company_url = `https://www.${resData[0].domain}/careers`;
        formState.company_logo = resData[0].logo;
      } else {
        throw Error;
      }
    } catch (e) {
      e.message = "Provide a company name";
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Unable to add job",
        text: e.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    try {
      if (
        formState.company_name &&
        formState.job_status &&
        formState.job_position
      ) {
        await addJob({
          variables: { ...formState },
        });
        //Pop up message for successfully saving job info
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Job added",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      } else {
        throw Error;
      }
    } catch (error) {
      error.message = 'Please provide job position and job status';
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Unable to add job",
        text: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-center title">ADD JOB</h1>
      <div className="form-group">
        <label className="required" htmlFor="text">
          Company Name
        </label>
        <input
          onChange={(e) => setCompanyName(e.target.value)}
          className="form-control border-warning"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label className="required" htmlFor="text">
          Job Position
        </label>
        <input
          onChange={(e) => setJobPosition(e.target.value)}
          className="form-control border-warning"
          autoComplete="off"
        />
      </div>
      <div className="form-group border-warning">
        <label className="required" htmlFor="text">
          Job Status
        </label>
        <AddStatusOption selectedStatus={setOptionList} />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Comment</label>
        <input
          onChange={(e) => setJobComment(e.target.value)}
          className="form-control border-warning"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Offer Amount</label>
        <input
          onChange={(e) => setOfferAmount(parseInt(e.target.value))}
          type="number"
          className="form-control border-warning"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Application Date</label>
        <DatePicker
          selected={applicationDate}
          className="border-warning dateInput"
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setApplicationDate(date)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Interview Date</label>
        <DatePicker
          selected={interviewDate}
          className="border-warning dateInput"
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setInterviewDate(date)}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="fav_input">Favorite</label>&nbsp;&nbsp;
        <MixedCheckbox
          id="fav_input"
          onChange={(event) => {
            setLabel(event.target.checked ? "favorite" : "");
          }}
        />
      </div>
      <br />
      <div className="form-group">
        <button
          className="form-control rounded-pill btn"
          onClick={handleRegister}
          style={{ backgroundColor: "rgb(249 143 134)" }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
