import React, {  useEffect } from "react";


import Logo from "../../assets/a.png";
import License from "../../assets/lic.png";

import {
  Button,
  Image,
  LogoContainer,
  WelcomePageContainer,
} from "./welcomepage-styles";

import { Line } from "../../utils/styles/styles";

const WelcomePage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <WelcomePageContainer>
      <LogoContainer>
        <img src={Logo} alt="redberry" />
        <Line></Line>
        <a href="/fill-resume/page=personal-info">
          {" "}
          <Button>რეზიუმეს დამატება</Button>
        </a>
        <Image src={License} alt="redberry" />
      </LogoContainer>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
