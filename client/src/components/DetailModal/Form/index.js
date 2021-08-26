import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatusOptionList from "../../StatusOptionList";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { UPDATE_JOB } from "../../../utils/mutations";
import { MixedCheckbox } from "@reach/checkbox";
import './form.css';

export const Form = ({ onSubmit, job_details }) => {
  // const [companyName, setCompanyName] = useState(job_details?.company_name?? "");
  const [jobPosition, setJobPosition] = useState(
    job_details?.job_position ?? ""
  );
  // const [companyLogo, setCompanyLogo] = useState(job_details?.company_logo??"");
  const [companyUrl, setCompanyUrl] = useState(job_details?.company_url ?? "");
  const [optionList, setOptionList] = useState(job_details?.job_status ?? "");
  const [jobComment, setJobComment] = useState(job_details?.job_comment ?? "");
  const [jobLabel, setLabel] = useState(job_details?.job_label ?? "");
  const [offerAmount, setOfferAmount] = useState(
    job_details?.offer_amount ?? ""
  );
  const [applicationDate, setApplicationDate] = useState(new Date());
  const [interviewDate, setInterviewDate] = useState(new Date());

  const formState = {
    _id: job_details._id,
    company_name: job_details.company_name,
    job_position: jobPosition,
    job_status: optionList,
    job_comment: jobComment,
    label: jobLabel,
    offer_amount: offerAmount,
    applicationDate: applicationDate,
    interviewDate: interviewDate,
    company_logo: job_details.company_logo,
    company_url: companyUrl,
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        formState.label
          ? (formState.label = "favorite")
          : (formState.label = "");
      console.log("THIS IS THE ID", job_details._id)
      console.log("FORMSTATE", formState);

        job_details.update(formState)
      //Pop up message for successfully saving job info
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Job added",
        showConfirmButton: false,
        timer: 1500,
      });
      // window.location.assign("/dashboard");
    } catch (error) {
      console.log(error)
      //Error message on form registration.
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Unable to update job, Please review your input.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div class="avatar text-center" >
          <a
            href={`https://www.${formState.company_url}/careers`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={formState.company_logo} alt="Avatar" />
          </a>
      </div>
      <div className="form-group">
        <h1 className="text-center title">{formState.company_name}</h1>
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Position</label>
        <input
          onChange={(e) => setJobPosition(e.target.value)}
          className="form-control border-warning"
          autoComplete="off"
          id="name"
          value={formState.job_position}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Status</label>
        <StatusOptionList placeholder={formState.job_position} selectedStatus={setOptionList} selectedOption={formState.job_status}/>
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Url</label>
        <input
          onChange={(e) => setCompanyUrl(e.target.value)}
          className="form-control border-warning"
          autoComplete="off"
          id="name"
          value={formState.company_url}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Comment</label>
        <input
          onChange={(e) => setJobComment(e.target.value)}
          className="form-control border-warning"
          autoComplete="off"
          id="name"
          value={formState.job_comment}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Offer Amount</label>
        <input
          onChange={(e) => setOfferAmount(parseInt(e.target.value))}
          type="number"
          className="form-control border-warning"
          autoComplete="off"
          id="name"
          value={formState.offer_amount}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Application Date</label>
        <DatePicker
          selected={applicationDate}
          dateFormat="MM/dd/yyyy"
          className="border-warning dateInput"
          onChange={(date) => setApplicationDate(date)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Interview Date</label>
        <DatePicker
          selected={interviewDate}
          dateFormat="MM/dd/yyyy"
          className="border-warning dateInput"
          onChange={(date) => setInterviewDate(date)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Favorite</label>&nbsp;&nbsp;
        <MixedCheckbox
          onChange={(event) => {
            setLabel(event.target.checked);
          }}
        />
      </div>
      <br />
      <div className="form-group">
        <button
          className="form-control btn"
          style={{"backgroundColor": "rgb(249 143 134)"}}
          onClick={handleUpdate}
          type="submit"
        >
          UPDATE
        </button>
      </div>
    </form>
  );
};

export default Form;
