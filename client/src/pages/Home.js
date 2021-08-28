import React from "react";
import { Message, HomeImage } from "./style";
import heroImage from './hero.jpg'
import HomeCard from '../components/HomeCard/HomeCard'


function Home() {
  return (
    <div style={{"display": "flex", 'height': '100%', 'overflow':'auto'}}>
      <Message>
        <HomeCard />
        <HomeImage src={heroImage} />
      </Message>
    </div>
  );
}

export default Home;
