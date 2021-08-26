import React from 'react';
import './trigger.css';

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className="buttonWrapper">
      <button
        className="btn btn-lg btn-outline-warning text-dark center modal-button"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </button>
    </div>

  );
};

export default TriggerButton;