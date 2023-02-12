import React, { useCallback, useContext, useState } from "react";

import { FormContext } from "../../contexts/formcontext";
import { ExperienceContext } from "../../contexts/experiencecontext";
import { EducationContext } from "../../contexts/educatuincontext";

import DisplayExperiencePage from "../displayexperiencepage/displayexperiencepage";
import DisplayPersonalInfo from "../displaypersonalinfo/displaypersonalinfo-components";
import DisplayEducation from "../displayeducation/displayeducation-component";

import {
  BackToWelcomeCont,
  LogoCont,
  MainContainer,
} from "./displaypage.styles";
import SuccesModal from "../../utils/successmodal/succesmodal";

import Logo from "../../assets/logo.png";
import BackToWelcome from "../../assets/backtowelcome.png";

const DisplayPage = ({ wholePage, success }) => {
  const [isSucces, setIsSucces] = useState(success);

  const { state } = useContext(FormContext);
  const { experienceState } = useContext(ExperienceContext);
  const { educationState } = useContext(EducationContext);

  const closeSuccess = useCallback(() => {
    setIsSucces(false);
  }, [setIsSucces]);

  const handleClick = useCallback(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <a href="/" onClick={handleClick}>
        <BackToWelcomeCont src={BackToWelcome} alt="close" />{" "}
      </a>
      <MainContainer wholePage={wholePage}>
        {isSucces && <SuccesModal onClick={closeSuccess} />}
        <DisplayPersonalInfo state={state} />
        <DisplayExperiencePage experienceState={experienceState} />
        <DisplayEducation educationState={educationState} />
        <LogoCont src={Logo} alt="" />
      </MainContainer>
    </>
  );
};

export default DisplayPage;
