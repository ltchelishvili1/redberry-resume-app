import React,{useCallback} from "react";
import {
  FillResumeContainer,
  ResumeContainer,
  Span,
} from "./fillresume-styles";
import { Outlet, useNavigate } from "react-router-dom";
import DisplayPage from "../../components/displaypage/displaypage-component";

import BackIcon from "../../assets/backtowelcome.png";

const FillResume = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Span>
       <a href="/"> <img src={BackIcon} onClick={handleClick} alt="back" /></a>
      </Span>
      <FillResumeContainer>
        <Outlet />
        <ResumeContainer>
          <DisplayPage />
        </ResumeContainer>
      </FillResumeContainer>
    </>
  );
};

export default FillResume;
