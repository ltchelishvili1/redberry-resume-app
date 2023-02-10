import React, { useContext } from "react";
import { FormContext } from "../../contexts/formcontext";
import { ExperienceContext } from "../../contexts/experiencecontext";
import { EducationContext } from "../../contexts/educatuincontext";

import DisplayExperiencePage from "../displayexperiencepage/displayexperiencepage";
import DisplayPersonalInfo from "../displaypersonalinfo/displaypersonalinfo-components";
import DisplayEducation from "../displayeducation/displayeducation-component";

import { MainContainer } from "./displaypage.styles";

const DisplayPage = ({ wholePage }) => {
  const { state } = useContext(FormContext);
  const { experienceState } = useContext(ExperienceContext);
  const { educationState } = useContext(EducationContext);

  return (
    <MainContainer wholePage={wholePage}>
      <DisplayPersonalInfo state={state} />
      <DisplayExperiencePage experienceState={experienceState} />
      <DisplayEducation educationState={educationState} />
    </MainContainer>
  );
};

export default DisplayPage;
