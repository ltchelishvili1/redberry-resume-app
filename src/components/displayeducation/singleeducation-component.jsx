import React, { useContext } from "react";

import { EducationContext } from "../../contexts/educatuincontext";

import {
  DatesCont,
  Description,
  PosEmplCont,
} from "../displayexperiencepage/displayexperiencepage-styles";

const EducationComp = ({ education }) => {
  const { degrees } = useContext(EducationContext);
  const { institute, degree_id, due_date, description } = education;

  return (
    <div>
      <PosEmplCont>
        <span>
          {institute && institute.value}
          {degree_id && institute && institute.value && degree_id.value && ", "}
        </span>
        <span>
          {degree_id &&
            degree_id.value &&
            degrees.find((deg) => deg.id === parseInt(degree_id.value))?.title}
        </span>
      </PosEmplCont>
      <DatesCont>
        <span>{due_date && due_date.value}</span>
      </DatesCont>
      <Description>{description && description.value}</Description>
    </div>
  );
};

export default EducationComp;
