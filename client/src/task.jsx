import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Button } from 'react-bootstrap';

const Container = styled.div`
  border: 1px solid darkgrey;
  border-radius: 2px;
  padding: 10px;
  height: 130px;
  background-color: ${(props) =>
    props.isDragging ? "rgb(249 143 134)" : "#fdeab0"};
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
            <div style={{"display": "flex", "flexDirection": "columns"}}>
              <div style={{"display": "flex", "flex": "1"}} >
                <img  src="https://logo.clearbit.com/uber.com" alt="..." height="50" />
              </div>
              <div>
                <p style={{"textAlign": "right", "padding": "0px", "margin": "0px"}} >{this.props.task.company_name}</p>
                <p style={{"textAlign": "right", "padding": "0px", "margin": "0px"}} >{this.props.task.job_position}</p>
              </div>
            </div>
            <br />
            <Button variant="warning" size="sm" onClick={() => {console.log('info')}} >Info</Button>
            &nbsp; &nbsp;
            <Button variant="danger" size="sm" onClick={() => {console.log('delete')}} >Remove</Button>
          </Container>
        )}
      </Draggable>
    );
  }
}
