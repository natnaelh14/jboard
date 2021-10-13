import React from 'react';
import { Button } from 'react-bootstrap';

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className="buttonWrapper">
      <Button
        variant="outline-warning" 
        size="sm"
        className="text-dark"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </Button>
    </div>
  );
};

export default TriggerButton;