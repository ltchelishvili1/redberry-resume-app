import React from "react";

import { CustomLine } from "../../routes/personalinfopage/personalinfopage-styles";

import { Title } from "./displayeducatuinpage-styles";

import EducationComp from "./singleeducation-component";

const DisplayEducation = ({ educationState }) => {
  return (
    <div>
      {educationState[0] &&
        !Object.values(educationState[0]).every((val) => val.value === "") && (
          <span>
            <CustomLine></CustomLine>
            <Title>{"განათლება".toLocaleUpperCase()}</Title>

            {educationState.map((education,index) => (
              <EducationComp key={`educ` + index} education={education} />
            ))}
          </span>
        )}
    </div>
  );
};

export default DisplayEducation;
