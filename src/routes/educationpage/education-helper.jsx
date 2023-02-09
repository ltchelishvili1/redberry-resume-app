import React, { useContext, useEffect } from "react";
import { DegreeCont } from "./education-page.styles";

import Input from "../../components/input/input-component";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validation/validation";
import { EducationContext } from "../../contexts/educatuincontext";

const Education = ({ count, countArr }) => {
  /*  const { setCount } = useContext(EducationContext);

    useEffect(() => {
      setCount(count);
    }, [count]);
  
*/
  return (
    <div>
      <Input
        element={"input"}
        sectionName="education"
        type="text"
        placeholder={"სასწავლებელი"}
        label="სასწავლებელი"
        errorText={"მინიმუმ 2 სიმბოლო"}
        name={`institute`}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
        count={count}
        countArr={countArr}
      />
      <DegreeCont>
        <Input
          element={"input"}
          sectionName="education"
          type="text"
          label="ხარისხი"
          name={`degree`}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
          count={count}
          countArr={countArr}
        />
        <Input
          element={"input"}
          sectionName="education"
          type="text"
          placeholder={"სასწავლებელი"}
          label="სასწავლებელი"
          name={`due_date`}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
          count={count}
          countArr={countArr}
        />
      </DegreeCont>
      <Input
        rows={8}
        sectionName="education"
        type="text"
        placeholder={"სასწავლებელი"}
        label="სასწავლებელი"
        errorText={"მინიმუმ 2 სიმბოლო"}
        name={`description`}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
        count={count}
        countArr={countArr}
      />
    </div>
  );
};

export default Education;
