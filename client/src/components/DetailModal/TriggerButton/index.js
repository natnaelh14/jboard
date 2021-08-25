import React from 'react';
import './trigger.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className="buttonWrapper">
      <Button
        variant="warning" size="sm"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </Button>
    </div>

  );
};

export default TriggerButton;