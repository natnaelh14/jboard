import React from 'react';

 export const Form = ({ onSubmit }) => {
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
        <input className="form-control" id="name" />
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
        <label htmlFor="name">Offer Amount</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Application Date</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Interview Date</label>
        <input className="form-control" id="name" />
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