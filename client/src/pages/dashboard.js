import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import jboardData from "../jboard_data";
import Column from "../column";

class Dashboard extends Component {
  state = jboardData;

  onDragEnd = result => {
    // TODO: reorder our column   
  }
  render() {
    return (
      //DragDropContext has three callbacks. the only required callback is onDragEnd.
      //onDragStart is called when the drag starts
      //onDragUpdate is called when something changes during a drag
      //onDragEnd is called at the end of the drag. it synchronously updates your state.
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const companies = column.companyIds.map(companyId => this.state.companies[companyId]);
          //the key is important because this is how React keeps track of the list.
          return <Column key={column.id} column={column} companies={companies} />
        })}
      </DragDropContext>
    );
  }
}

export default Dashboard;