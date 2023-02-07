import React, { useState } from "react";

import Input from "../../components/input/input-component";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validation/validation";

import { CustomLine } from "../personalinfopage/personalinfopage-styles";

import { DatesContainer, ExperienceCont } from "./experiencepage-styles";

const Experience = ({ count, countArr }) => {
  return (
    <div>
      <Input
        element={"input"}
        sectionName="experience"
        type="text"
        placeholder={"თანამდებობა"}
        label="თანამდებობა"
        errorText={"მინიმუმ 2 სიმბოლო"}
        name={`position`}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
        count={count}
        countArr={countArr}
      />

      <Input
        element={"input"}
        type="text"
        sectionName="experience"
        placeholder={"დამსაქმებელი"}
        label="დამსაქმებელი"
        errorText={"მინიმუმ 2 სიმბოლო"}
        name={`employeer`}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
        count={count}
        countArr={countArr}
      />

      <DatesContainer>
        <Input
          element={"input"}
          type="date"
          sectionName="experience"
          label="დაწყების რიცხვი"
          name={`start_date`}
          validators={[VALIDATOR_REQUIRE()]}
          styles={{ background: "transparent" }}
          count={count}
          countArr={countArr}
        />

        <Input
          element={"input"}
          type="date"
          sectionName="experience"
          label="დამთავრების რიცხვი"
          name={`due_date`}
          validators={[VALIDATOR_REQUIRE()]}
          styles={{ background: "transparent" }}
          count={count}
          countArr={countArr}
        />
      </DatesContainer>
      <Input
        rows={"6"}
        type="text"
        sectionName="experience"
        placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
        label="აღწერა"
        initialValid={true}
        name={`epxerienceDescription`}
        count={count}
        countArr={countArr}
      />

      <CustomLine></CustomLine>
    </div>
  );
};

export default Experience;
