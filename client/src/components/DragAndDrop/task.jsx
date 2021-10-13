import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Button } from 'react-bootstrap';
import DetailModal from "../DetailModal/DetailModal/index";
import Form from "../DetailModal/Form";
import './task.css';
import { Badge } from 'reactstrap';

const Container = styled.div`
  border: 3px solid #fff0ef;
  border-radius: 2px;
  padding: 10px;
  height: auto;
  background-color: ${(props) =>
    props.isDragging ? "rgb(249 143 134)" : "white" };
`;

export default class Task extends React.Component {
  render() {
    return (
      //Draggable takes in two required props, draggableId which we will pass in our task.id and an index.
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
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
              <a href={this.props.task.company_url} target="_blank" rel="noopener noreferrer" ><img  src={this.props.task.company_logo} alt="logo" width="50" height="50" /></a>
              </div>
              <div>
                <p style={{"textAlign": "right", "padding": "0px", "margin": "0px", "fontSize": "1.2rem", "fontWeight": "bold"}} >{this.props.task.company_name.toUpperCase()}</p>
                <p style={{"textAlign": "right", "padding": "0px", "margin": "0px"}} >{this.props.task.job_position}</p>
                <div className='badge-container'>
                  {(this.props.task.label) ? <Badge className="rounded-pill" >{this.props.task.label}</Badge> : ""}
                </div>
              </div>
            </div>
            <br />
            <div style={{"display": "flex", "flexDirection": "columns" }}>
              <DetailModal triggerText="Info">
                <Form onSubmit={()=>{}} job_details={this.props.task}/>
              </DetailModal>
              &nbsp; &nbsp;
              <Button variant="outline-danger" className="text-dark" size="sm" onClick={() =>{this.props.task.delete()}} >Remove</Button>
            </div>
          </Container>
        )}
      </Draggable>
    );
  }
}
