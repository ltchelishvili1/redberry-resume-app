import React from "react";

import {
  Button,
  Image,
  Line,
  LogoContainer,
  WelcomePageContainer,
} from "./welcomepage-styles";

import Logo from "../../assets/a.png";

import License from "../../assets/lic.png";

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <LogoContainer>
        <img src={Logo} alt="redberry" />
        <Line></Line>
        <Button>რეზიუმეს დამატება</Button>
        <Image src={License} alt="redberry" />
      </LogoContainer>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
