import React from "react";
import {
  FillResumeContainer,
  FormContainer,
  ResumeContainer,
} from "./fillresume-styles";
import { Route, Routes, Navigate, Link, useLocation, Outlet } from "react-router-dom";

const FillResume = () => {
  return (
    <FillResumeContainer>
       <Outlet />
      <ResumeContainer>12345</ResumeContainer>
    </FillResumeContainer>
  );
}

export default FillResume;
