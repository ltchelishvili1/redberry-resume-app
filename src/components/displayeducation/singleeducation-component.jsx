import React, { useContext, useEffect, useState } from "react";

import { EducationContext } from "../../contexts/educatuincontext";

import {
  DatesCont,
  Description,
  PosEmplCont,
} from "../displayexperiencepage/displayexperiencepage-styles";

const EducationComp = ({ education, index }) => {
  const { degrees } = useContext(EducationContext);
  const { responseData, status } = useContext(EducationContext);
  const [responseParsed, setResponseParsed] = useState({});

  useEffect(() => {
    let obj = {};
    if (responseData && responseData.educations) {
      for (let key in responseData.educations[index]) {
        obj[key] = {
          value: responseData.educations[index][key],
        };
      }
      setResponseParsed(obj);
    }
  }, [responseData]);

  const { institute, degree_id, due_date, description } =
    status === 201 && responseData ? responseParsed : education;

  return (
    <div>
      <PosEmplCont>
        <span>
          {institute && institute.value}
          {degree_id && institute && institute.value && degree_id.value && ", "}
        </span>
        {status === 201 && responseData && responseParsed.degree ? (
          <span>{", " + responseParsed.degree.value}</span>
        ) : (
          <span>
            {degree_id &&
              degree_id.value &&
              degrees.find((deg) => deg.id === parseInt(degree_id.value))
                ?.title}
          </span>
        )}
      </PosEmplCont>
      <DatesCont>
        <span>{due_date && due_date.value}</span>
      </DatesCont>
      <Description>{description && description.value}</Description>
    </div>
  );
};

export default EducationComp;
