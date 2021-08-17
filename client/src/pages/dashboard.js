import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import jboardData from "../jboard_data";
import Column from "../column";

class Dashboard extends Component {
  state = jboardData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTCompanyIds = Array.from(column.companyIds);
    newTCompanyIds.splice(source.index, 1);
    newTCompanyIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      companyIds: newTCompanyIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };  

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