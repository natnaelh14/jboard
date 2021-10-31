import React, { useState } from "react";
import styled from "styled-components";
import "./home.css";
import { Link } from "react-router-dom";
import gifImage from './demo.gif';
import stillImage from './still.png';
import GifPlayer from "react-gif-player";

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
  const [buttonText, setButtonText] = useState('PREVIEW');
  const [buttonRoute, setButtonRoute] = useState('')
  const [showGif, setShowGIf] = useState();

  const handleClick = (e) => {
    setButtonText('SIGN UP FOR FREE')
    setButtonRoute('/signup')
    setShowGIf('show-gif')
  }

  return (
    <DetailsContainer>
      <InnerContainer>
        <Header>Welcome to JBoard</Header>
        <SubHeader>A Job Application Tracker</SubHeader>
        <Text>
          Jboard empowers job seekers with tools to
          keep track of job applications.
        </Text>
        <Link to={buttonRoute}>
          <button className="glow-on-hover" type="button" onClick={() => handleClick()}>
            {buttonText}
          </button>
        </Link>
      </InnerContainer>
      <div className='gif-container'>
        <GifPlayer autoplay gif={gifImage} still={stillImage} className={`gif-image ${showGif}`} />
      </div>
    </DetailsContainer>
  );
}

export default HomeCard;
