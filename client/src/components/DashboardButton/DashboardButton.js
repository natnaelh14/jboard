import React from "react";
import { HomeStyles, ButtonsWrapper, Button } from "./style";

export default function Home() {
  return (
    <ButtonsWrapper>
      <Button>
        <a href="#" class="animated-button thar-two">
          ADD COMPANY
        </a>
      </Button>
      <Button>
        <a href="#" class="animated-button thar-two">
          RESUME
        </a>
      </Button>
    </ButtonsWrapper>
  );
}
