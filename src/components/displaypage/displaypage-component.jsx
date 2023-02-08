import React, { useContext } from "react";
import { FormContext } from "../../contexts/formcontext";

import DisplayExperiencePage from "../displayexperiencepage/displayexperiencepage";
import DisplayPersonalInfo from "../displaypersonalinfo/displaypersonalinfo-components";
import { MainContainer } from "./displaypage.styles";

const DisplayPage = () => {
  const { state } = useContext(FormContext);
  return (
    <MainContainer>
      <DisplayPersonalInfo state={state} />
      <DisplayExperiencePage />
    </MainContainer>
  );
};

export default DisplayPage;
