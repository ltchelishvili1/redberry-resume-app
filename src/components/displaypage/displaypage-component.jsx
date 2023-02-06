import React, { useContext } from "react";
import { FormContext } from "../../contexts/formcontext";
import DisplayPersonalInfo from "../displaypersonalinfo/displaypersonalinfo-components";
import { MainContainer } from "./displaypage.styles";

const DisplayPage = () => {
  const { state } = useContext(FormContext);
  return (
    <MainContainer>
      <DisplayPersonalInfo state={state} />
    </MainContainer>
  );
};

export default DisplayPage;
