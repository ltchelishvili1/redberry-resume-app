import React, { useContext, useEffect, useState } from "react";
import { DegreeCont } from "./education-page.styles";

import Input from "../../components/input/input-component";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validation/validation";
import { EducationContext } from "../../contexts/educatuincontext";

import { useHttpClient } from "../../hooks/sendrequesthook";
import LoadSpinner from "../../utils/spinner/LoadSpinner";

const Education = ({ count, countArr }) => {
  const { setCount, degrees, setDegrees } = useContext(EducationContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    setCount(count);
  }, [count]);

  useEffect(() => {
    const fetchDegrees = async () => {
      try {
        const responseData = await sendRequest(
          "https://resume.redberryinternship.ge/api/degrees"
        );
        setDegrees(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDegrees();
  }, []);

  return (
    <div>
      {isLoading && <LoadSpinner asOverlay />}
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
          element={"option"}
          sectionName="education"
          type="text"
          label="ხარისხი"
          name={`degree_id`}
          vals={degrees}
          validators={[VALIDATOR_REQUIRE()]}
          count={count}
          countArr={countArr}
          id= 'temp'
        />
        <Input
          element={"input"}
          sectionName="education"
          type="date"
          placeholder={"დამთავრების რიცხვი"}
          label="დამთავრების რიცხვი"
          name={`due_date`}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
          count={count}
          countArr={countArr}
          styles={{ background: "transparent" }}
        />
      </DegreeCont>
      <Input
        rows={8}
        sectionName="education"
        type="text"
        placeholder={"განათლების აღწერა"}
        label="აღწერა"
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
