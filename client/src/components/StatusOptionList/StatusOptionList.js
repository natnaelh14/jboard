import { React, Component } from "react";
import Select from "react-select";

const options = [
  {
    value: "Applied",
    label: "Applied",
  },
  {
    value: "Priority",
    label: "Priority",
  },
  {
    value: "Interview",
    label: "Interview",
  },
  {
    value: "Offer",
    label: "Offer",
  },
  {
    value: "Inactive",
    label: "Inactive",
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