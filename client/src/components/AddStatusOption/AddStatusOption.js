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

export default class AddStatusOption extends Component {
  state = {
    selectedOption: null,
  };
  
  constructor(props) {
    super(props)

    let _start_option= {
      value: props.selectedOption ?? '',
      label: props.selectedOption ?? '',
    }
    this.setState({selectedOption : _start_option})
  }
  handleChange = (selectedOption) => {
    this.props.selectedStatus(selectedOption.value)
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