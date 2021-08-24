import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 10px;
  height: 130px;
  background-color: ${(props) =>
    props.isDragging ? "rgb(249 143 134)" : "white"};
`;

export default class Task extends React.Component {
  render() {
    return (
      //Draggable takes in two required props, draggableId which we will pass in our task.id and an index.
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
      //These props need to be applied to the component that we want to move around in response to user input.
            {...provided.draggableProps}
      //These props need to be applied to the component that we want to use to be able to control the entire component.
            {...provided.dragHandleProps}
            ref={provided.innerRef}
      //We use snapshot to change the background color of our task as it drags.
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
            <br />
            {this.props.task.position}
            <br />
            <br />
            <button type='button' style={{backgroundColor: '#F7CA18', borderRadius: '25px' }} onClick={() => {console.log('info')}}>Info</button>
            &nbsp; &nbsp;
            <button type='button' style={{backgroundColor: '#F7CA18', borderRadius: '25px' }} onClick={() => {console.log('delete')}}>Delete</button>
          </Container>
        )}
      </Draggable>
    );
  }
}
