import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default class Company extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.company.id} index={this.props.index}>
        {provided => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
            >
              {this.props.company.name}
              <br />
              {this.props.company.position}
            </Container>
        )}
      </Draggable>
    );
  }
}
