import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/experiencecontext";
import { CustomLine } from "../../routes/personalinfopage/personalinfopage-styles";

import {
  Tittle,
  ExperienceContainer,
  Span,
  PosEmplCont,
  DatesCont,
  Description,
} from "./displayexperiencepage-styles.jsx";

const DisplayExperiencePage = () => {
  const { experienceState, count } = useContext(ExperienceContext);

  if (experienceState)
    return (
      <>
        {experienceState[count] &&
          Object.keys(experienceState[count]).length !== 0 && (
            <ExperienceContainer>
              {!Object.values(experienceState[0]).every(
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
                      {experience.employeer &&
                        experience.position &&
                        experience.position.value &&
                        experience.employeer.value &&
                        ", "}
                    </span>
                    <span>
                      {experience.employeer && experience.employeer.value}
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
                    <span>
                      {experience.due_date && experience.due_date.value}
                    </span>
                  </DatesCont>
                  <Description>
                    {experience.epxerienceDescription &&
                      experience.epxerienceDescription.value}
                  </Description>
                </div>
              ))}
            </ExperienceContainer>
          )}
      </>
    );
};

export default DisplayExperiencePage;
