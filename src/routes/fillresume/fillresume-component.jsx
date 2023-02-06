import React from "react";
import { FillResumeContainer, ResumeContainer } from "./fillresume-styles";
import { Outlet } from "react-router-dom";
import DisplayPage from "../../components/displaypage/displaypage-component";

const FillResume = () => {
  return (
    <FillResumeContainer>
      <Outlet />
      <ResumeContainer>
        <DisplayPage />
      </ResumeContainer>
    </FillResumeContainer>
  );
};

export default FillResume;
