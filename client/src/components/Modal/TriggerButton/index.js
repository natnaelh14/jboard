import React from 'react';
import './trigger.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className="buttonWrapper">
      <button
        className="btn btn-lg btn-outline-warning center modal-button"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </button>
    </div>

  );
};

export default TriggerButton;