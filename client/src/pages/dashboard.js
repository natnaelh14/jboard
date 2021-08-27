import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import initialData from "../initial-data";
import Column from "../column";
import ModalContainer from "../components/Modal/ModalContainer";
import "./Modal.css";

//use this container to align the columns
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
//We use InnerList to only update the state for tasks/columns involved
class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

export default class Dashboard extends React.Component {

  constructor(props, context){
    super(props)
    this.state = {...this.props.initial_state, columnOrder: this.props.columnOrder}
  }
  
  //MODAL INFORMATION
  //we are setting the initial state to be initial data.
  // state = initialData;
  //it is onDragEnd responsibility to synchronously update your state to reflect the drag and drop result.
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    //if user drop the task card outside of the container
    if (!destination) {
      return;
    }
    //If the user drops the task card in the same location as it initially was.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //this is for reordering a column.
    if (type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      //We create a new column and a new state and save those in a constant.
      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }
    //we are looking up the column for the state
    const home = this.state.columns[source.droppableId];
    const foreign = this.state.columns[destination.droppableId];

      //which means the movement is in the same column
    if (home === foreign) {
      //We need to create a new taskId array with the same content as our last array, rather than mutating the same array.
      const newTaskIds = Array.from(home.taskIds);
      //We move the task ID from its old index to its new index in the array. Splice modifies the array and will modify the newTaskIds.
      //We are saying from this index, we want to move one item.
      newTaskIds.splice(source.index, 1);
      //We will splice again from the destination.index to remove nothing and insert the draggableId.
      //We insert the draggableId, which we know is the taskID
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newHome.id]: newHome,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    //We need to create a startTaskIds array and a newHome column and remove the dragged taskId from teh old array.
    const homeTaskIds = Array.from(home.taskIds);
    let moved_task = homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };
    //We are creating foreignTaskIds that contains the same taskIds as the last array and and use splice to insert draggableId.
    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };
    //Finally, we need to create a newState updating the new column's map and taskIds.
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);

    //This is updating the the column that job is removed and added using job-status.
    let temp_task = Object.assign(this.state.tasks[moved_task], {job_status: foreign.title})
    temp_task.update(temp_task)
  };

  render() {
    return (
      <>
        <ModalContainer triggerText="ADD JOB" />
        {/* DragDropContext has three callbacks. onDragStart, which is called when the drag starts. onDragUpdate is called when something changes during a drag, and onDragEnd, which is called a tht end of a drag. */}
        <DragDropContext onDragEnd={this.onDragEnd}>
        {/* This droppable is to move columns horizontally */}
          <Droppable
            droppableId="all-columns"//this id has no functionality
            direction="horzontal"
            type="column"
          >
            {(provided) => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];
                  return (
                    <InnerList
                      //we have to give a key to the column bc this is how react keeps track of the list.
                      key={column.id}
                      column={column}
                      taskMap={this.state.tasks}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}
