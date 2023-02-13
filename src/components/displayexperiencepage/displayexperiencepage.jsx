import React from "react";

import { CustomLine } from "../../routes/personalinfopage/personalinfopage-styles";

import {
  Tittle,
  ExperienceContainer,
} from "./displayexperiencepage-styles.jsx";
import ExperienceComp from "./singleexperience-component";

const DisplayExperiencePage = ({ experienceState }) => {
  return (
    <>
      {
        <ExperienceContainer>
          {experienceState[0] &&
            !Object.values(experienceState[0]).every(
              (val) => val.value === ""
            ) && (
              <span>
                <CustomLine></CustomLine>
                <Tittle>{"გამოცდილება".toLocaleUpperCase()}</Tittle>
              </span>
            )}

          {experienceState.map((experience, index) => (
            <ExperienceComp key={`exp` + index} experience={experience} index ={index}/>
          ))}
        </ExperienceContainer>
      }
    </>
  );
};

export default DisplayExperiencePage;
