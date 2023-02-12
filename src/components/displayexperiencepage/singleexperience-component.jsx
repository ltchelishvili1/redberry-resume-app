import React from "react";

import {
  PosEmplCont,
  DatesCont,
  Description,
} from "./displayexperiencepage-styles.jsx";

const ExperienceComp = ({ experience }) => {
  const { position, employer, start_date, due_date, description } = experience;

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
