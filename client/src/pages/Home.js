import React from "react";
import { Message, HomeImage, HomeContainer } from "./style";
import heroImage from './hero.jpg'
import HomeCard from '../components/HomeCard/HomeCard'


function Home() {
  return (
    <HomeContainer>
      <Message>
        <HomeCard />
        <HomeImage src={heroImage} />
      </Message>
    </HomeContainer>
  );
}

export default Home;
