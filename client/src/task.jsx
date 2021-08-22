import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 20px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragging ? "rgb(249 143 134)" : "white"};
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
            <br />
            {this.props.task.position}
            <br />
            <br />
            <button type='button' onClick={() => {console.log('info')}}>Info</button>
            &nbsp; &nbsp;
            <button type='button' onClick={() => {console.log('delete')}}>Delete</button>
          </Container>
        )}
      </Draggable>
    );
  }
}
