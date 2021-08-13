import React, { Component } from "react";
import styled from "styled-components";
import Company from './company';

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
        <CompanyList>
            {this.props.companies.map(company => <Company key={company.id} company={company} />)}
        </CompanyList>
      </Container>
    );
  }
}
