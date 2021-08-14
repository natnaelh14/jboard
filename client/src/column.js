import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Company from "./company";

const Container = styled.div`
  margin: 8px;
  border: 2px solid red;
  border-radius: 3px;
`;
const Title = styled.h3`
  padding: 8px;
  font-weight: bold;
  text-align: center;
`;
const CompanyList = styled.div`
  padding: 8px;
`;

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        {/* Droppable has only one required prop, droppableId. it needs to unique. */}
        {/* Droppable utilizes the render props pattern and expects it children to be a function that return a react component. */}
        {/* Provided is an object that give you droppableProps, which we will use to designate which component we want as our droppable. */}
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <CompanyList 
              innerRef = {provided.innerRef}
              {...provided.droppableProps}
            >
              {/* a second argument in map method is the index of an item */}
              {this.props.companies.map((company, index) => (<Company key={company.id} company={company} index={index} />))}
              {provided.placeholder}
            </CompanyList>
          )}
        </Droppable>
      </Container>
    );
  }
}
