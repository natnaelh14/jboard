import React from "react";
import { HomeStyles, ButtonsWrapper } from "./style";

export default function Home() {
    return (
      <HomeStyles>
        <ButtonsWrapper>
          <button>ADD COMPANY</button>
          <button>RESUME</button>
        </ButtonsWrapper>
      </HomeStyles>
    );
  }