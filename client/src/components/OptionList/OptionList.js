import { React, Component } from "react";
import Select from "react-select";

const options = [
  {
    value: "Where were you born?",
    label: "Where were you born?",
  },
  {
    value: "What is your mother's maiden name?",
    label: "What is your mother's maiden name?",
  },
  {
    value: "What is your favorite sports team?",
    label: "What is your favorite sports team?",
  },
  {
    value: "What is the make of your first car?",
    label: "What is the make of your first car?",
  },
];

export default class OptionList extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.props.selectedQuestion(selectedOption.value)
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption }  = this.state;
    return (
      <Select
        options={options}
        onChange={this.handleChange}
        value={selectedOption}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary50: "primary50",
            primary75: "primary75",
          },
        })}
      />
    );
  }
}
