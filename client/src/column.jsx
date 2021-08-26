import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./task";

const Container = styled.div`
  margin: 8px;
  border: 3px solid #fff0ef;
  background-color: #fff0ef;
  border-radius: 2px;
  width: 250px;
  height: 750px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  text-align: center;
  font-weight: bold;
  background-color: #ffaea6;
  border: 3px solid #fff0ef;

`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  border: 3px solid #fff0ef;
  background-color: ${(props) =>
    props.isDraggingOver ? "#a2a2a2" : "#e6e6e6"};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task, index) => (
      //we are passing index to the task component.
      <Task key={task._id} task={task} index={index} />
    ));
  }
}

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {/* Provided is the first prop to our function. it gives us droppableProps which we will use to designate which component we want as our droppable. */}
              {(provided, snapshot) => (
                <TaskList
                //innerRef is a function used to supply the DOM node of your component to react-beautiful-dnd.
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                //We will use snapshot to change the background color of the column.
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
