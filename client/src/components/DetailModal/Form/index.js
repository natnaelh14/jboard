import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatusOptionList from "../../StatusOptionList";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { ADD_JOB } from "../../../utils/mutations";
import { MixedCheckbox } from "@reach/checkbox";

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
  const [applicationDate, setApplicationDate] = useState(
    job_details?.application_date ?? new Date()
  );
  const [interviewDate, setInterviewDate] = useState(
    job_details?.interview_date ?? new Date()
  );
  const [addJob, { error, data }] = useMutation(ADD_JOB);

  const formState = {
    company_name: job_details.company_name,
    job_position: jobPosition,
    job_status: optionList,
    job_comment: jobComment,
    label: jobLabel,
    offer_amount: Number.parseInt(offerAmount),
    applicationDate: applicationDate,
    interviewDate: interviewDate,
    company_logo: job_details.company_logo,
    company_url: companyUrl,
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      {
        formState.label
          ? (formState.label = "favorite")
          : (formState.label = "");
      }
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
    <form onSubmit={onSubmit}>
      <div class="avatar">
        <a
          href={`https://www.${formState.company_url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            src={formState.company_logo}
            alt="Avatar"
            className="center-block"
          />
        </a>
      </div>
      <div className="form-group">
        <h1 className="text-center">{formState.company_name}</h1>
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Position</label>
        <input
          onChange={(e) => setJobPosition(e.target.value)}
          className="form-control"
          id="name"
          value={formState.job_position}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Status</label>
        <StatusOptionList selectedStatus={setOptionList} />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Url</label>
        <input
          onChange={(e) => setCompanyUrl(e.target.value)}
          className="form-control"
          id="name"
          value={formState.company_url}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Comment</label>
        <input
          onChange={(e) => setJobComment(e.target.value)}
          className="form-control"
          id="name"
          value={formState.job_comment}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Offer Amount</label>
        <input
          onChange={(e) => setOfferAmount(e.target.value)}
          type="number"
          className="form-control"
          id="name"
          value={formState.offer_amount}
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
