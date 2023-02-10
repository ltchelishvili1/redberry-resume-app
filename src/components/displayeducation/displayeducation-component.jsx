import React from "react";
import { CustomLine } from "../../routes/personalinfopage/personalinfopage-styles";
import { DatesCont, Description, PosEmplCont } from "../displayexperiencepage/displayexperiencepage-styles";

import { Title } from "./displayeducatuinpage-styles";

const DisplayEducation = ({ educationState }) => {

  return (
    <div>
      {educationState[0] &&
        !Object.values(educationState[0]).every((val) => val.value === "") && (
          <span>
            <CustomLine></CustomLine>
            <Title>{"განათლება".toLocaleUpperCase()}</Title>

            {educationState.map((education) => (
              <div>
                <PosEmplCont>
                  <span>
                    {education.institute && education.institute.value}
                    {education.degree_id &&
                     education.institute && education.institute.value &&
                      education.degree_id.value &&
                      ", "}
                  </span>
                  <span>
                    {education.degree_id && education.degree_id.value}
                  </span>
                </PosEmplCont>
                <DatesCont>
                  <span>
                    {education.due_date && education.due_date.value}
                  </span>
            
                </DatesCont>
                <Description>
                  {education.description &&
                    education.description.value}
                </Description>
              </div>
            ))}
          </span>
        )}
    </div>
  );
};

export default DisplayEducation;
