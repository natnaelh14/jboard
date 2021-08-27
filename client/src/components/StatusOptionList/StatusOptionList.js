import { React, Component } from "react";
import Select from "react-select";

const options = [
  {
    value: "Wish List",
    label: "Wish List",
  },
  {
    value: "Applied",
    label: "Applied",
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
  state
  constructor(props) {
    super(props)
    
    // find index of SelectOption
    let [selected_status] = options.filter((option)=>option.label.toLowerCase().trim().includes(props.selectedOption.toLowerCase().trim() ??''))
    debugger

    this.state = {selectedOption: selected_status ?? {
      value: "Wish List",
      label: "Wish List",
    }}
    
  }
  handleChange = (selectedOption) => {
    this.props.selectedStatus(selectedOption.value)
    this.setState({ selectedOption });
  };
  render() {
    // const { selectedOption }  = this.state;
    return (
      <Select
        options={options}
        onChange={this.handleChange}
        value={this.state.selectedOption}
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