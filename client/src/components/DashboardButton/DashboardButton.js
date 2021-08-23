import React from "react";
import { ButtonsWrapper, Button } from "./style";
import Auth from "../../utils/auth";

export default function Home() {
  return (
    <ButtonsWrapper>
      {/* <Button href={Auth.getUser().data.resume_url} target="_blank" >
          RESUME
      </Button> */}
    </ButtonsWrapper>
  );
}
