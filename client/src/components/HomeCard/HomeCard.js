import React from "react";
import styled from "styled-components";
import "./home.css";
import { Link } from "react-router-dom";

const DetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

const Header = styled.h1`
  margin: 0;
  color: rgb(249 143 134);
  font-weight: 700;
  font-size: 45px;
`;

const SubHeader = styled.h3`
  margin: 10px 0;
  color: #000;
  font-weight: 700;
  font-size: 24px;
`;

const Text = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 1.1rem;
`;

export function HomeCard() {
  return (
    <DetailsContainer>
      <InnerContainer>
        <Header>Welcome to JBoard</Header>
        <SubHeader>A Job Application Tracker</SubHeader>
        <Text>
          Jboard empowers job seekers with tools to
          keep track of job applications.
        </Text>
        <Link to="/signup">
          <button className="glow-on-hover" type="button">
            SIGN UP FOR FREE
          </button>
        </Link>
      </InnerContainer>
    </DetailsContainer>
  );
}

export default HomeCard;
