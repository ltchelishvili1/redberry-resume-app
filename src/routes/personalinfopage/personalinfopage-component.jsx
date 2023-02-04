import React from "react";
import Input from "../../components/input/input-component";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_GEORGIAN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_PHONENUMBER,
  VALIDATOR_REQUIRE,
  VALIDATOR_VALID,
} from "../../utils/validation/validation";
import {
  CustomLine,
  NameSurnameContainer,
  PersonalInfoPageCont,
  Tittle,
  UploadContainer,
  UploadTittle,
} from "./personalinfopage-styles";

const PersonalInfoPage = () => {
  return (
    <PersonalInfoPageCont>
      <Tittle>პირადი ინფო</Tittle>
      <CustomLine></CustomLine>
      <NameSurnameContainer>
        <Input
          element={"input"}
          type="text"
          placeholder={"ანზორ"}
          label="სახელი"
          errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
          validators={[
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(),
            VALIDATOR_GEORGIAN(),
          ]}
        />{" "}
        <Input
          element={"input"}
          type="text"
          placeholder={"მუმლაძე"}
          label="გვარი"
          errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
          validators={[
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(),
            VALIDATOR_GEORGIAN(),
          ]}
        />
      </NameSurnameContainer>
      <UploadContainer>
        <UploadTittle>პირადი ფოტოს ატვირთვა</UploadTittle>
        <button>ატვირთვა</button>
      </UploadContainer>
      <Input
        rows={"6"}
        type="text"
        placeholder={"ზოგადი ინფო შენ შესახებ"}
        label="ჩემ შესახებ (არასავალდებულო)"
      />

      <Input
        element={"input"}
        type="email"
        placeholder={"anzor666@redberry.ge"}
        label="ელ.ფოსტა"
        errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
      />
      <Input
        element={"input"}
        type="text"
        placeholder={"+995 551 12 34 56"}
        label="მობილურის ნომერი"
        errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONENUMBER()]}
      />
    </PersonalInfoPageCont>
  );
};

export default PersonalInfoPage;
