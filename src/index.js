import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jboardData from './jboard_data';
import Column from './column';

class App extends Component {
  state = jboardData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const companies = column.companyIds.map(companyId => this.state.companies[companyId])
      //the key is important because this is how React keeps track of the list.
      return <Column key={column.id} column={column} companies={companies} />;

    })
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


