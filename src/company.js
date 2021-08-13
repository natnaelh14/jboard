import React, { Component } from "react";
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    border-radius: 2px;
    padding:8px;
    margin-bottom: 8px;
`;

export default class Company extends Component {
    render() {
        return <Container>{this.props.company.name}</Container>
    }
}