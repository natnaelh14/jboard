import React from "react";
import Select from "react-select";

const options = [
    {
        value: "Where were you born?",
        label: 'Where were you born?',
    },
    {
        value: "What is your mother's maiden name?",
        label: "What is your mother's maiden name?",
    },
    {
        value: "What is your favorite sports team?",
        label: 'What is your favorite sports team?',
    },
    {
        value: "What is the make of your first car?",
        label: 'What is the make of your first car?',
    }
];

function OptionList() {
  return (
    <Select
      defaultValue={options[1]}
      label={options}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary50: "lightblue",
          primary75: "blue",
        },
      })}
    />
  );
}

export default OptionList;
