import React, { useContext, useEffect, useState } from "react";
import { EducationContext } from "../../contexts/educatuincontext.js";

import {
  PosEmplCont,
  DatesCont,
  Description,
} from "./displayexperiencepage-styles.jsx";

const ExperienceComp = ({ experience, index }) => {
  const { responseData, status } = useContext(EducationContext);
  const [responseParsed, setResponseParsed] = useState({});

  useEffect(() => {
    let obj = {};
    if (responseData && responseData.experiences) {
      for (let key in responseData.experiences[index]) {
    
        obj[key] = {
          value: responseData.experiences[index][key],
        };
      }

      setResponseParsed(obj);
    }
  }, [responseData]);

  const { position, employer, start_date, due_date, description } =
    responseData && status === 201 ? responseParsed : experience;

  return (
    <div>
      <PosEmplCont>
        <span>
          {position && position.value}
          {employer && position && position.value && employer.value && ", "}
        </span>
        <span>{employer && employer.value}</span>
      </PosEmplCont>
      <DatesCont>
        <span>{start_date && start_date.value}</span>
        <span>
          {due_date &&
            start_date &&
            start_date.value &&
            due_date.value &&
            " - "}
        </span>
        <span>{due_date && due_date.value}</span>
      </DatesCont>
      <Description>{description && description.value}</Description>
    </div>
  );
};

export default ExperienceComp;
