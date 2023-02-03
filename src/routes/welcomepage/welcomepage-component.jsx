import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/fill-resume/page=personal-info");
  }, []);

  return (
    <WelcomePageContainer>
      <LogoContainer>
        <img src={Logo} alt="redberry" />
        <Line></Line>
        <Button onClick={handleClick}>რეზიუმეს დამატება</Button>
        <Image src={License} alt="redberry" />
      </LogoContainer>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
