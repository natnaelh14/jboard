import React from "react";
import { ButtonsWrapper, Button } from "./style";
import Auth from "../../utils/auth";

export default function Home() {
  return (
    <ButtonsWrapper>
      <Button>
        <a href="#" class="animated-button thar-two">
          ADD COMPANY
        </a>
      </Button>
      <Button>
        <a href={Auth.getUser().data.resume_url} class="animated-button thar-two">
          RESUME
        </a>
      </Button>
    </ButtonsWrapper>
  );
}
