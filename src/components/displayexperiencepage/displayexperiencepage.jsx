
import React  from "react";
import { CustomLine } from "../../routes/personalinfopage/personalinfopage-styles";

import {
  Tittle,
  ExperienceContainer,
  Span,
  PosEmplCont,
  DatesCont,
  Description,
} from "./displayexperiencepage-styles.jsx";

const DisplayExperiencePage = ({experienceState}) => {


  // let checkIfExperienceAdded = count != 0 && experienceState.length < count + 1;

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

          {experienceState.map((experience) => (
            <div>
              <PosEmplCont>
                <span>
                  {experience.position && experience.position.value}
                  {experience.employer &&
                    experience.position &&
                    experience.position.value &&
                    experience.employer.value &&
                    ", "}
                </span>
                <span>
                  {experience.employer && experience.employer.value}
                </span>
              </PosEmplCont>
              <DatesCont>
                <span>
                  {experience.start_date && experience.start_date.value}
                </span>
                <span>
                  {experience.due_date &&
                    experience.start_date &&
                    experience.start_date.value &&
                    experience.due_date.value &&
                    " - "}
                </span>
                <span>{experience.due_date && experience.due_date.value}</span>
              </DatesCont>
              <Description>
                {experience.description &&
                  experience.description.value}
              </Description>
            </div>
          ))}
        </ExperienceContainer>
      }
    </>
  );
};

export default DisplayExperiencePage;
