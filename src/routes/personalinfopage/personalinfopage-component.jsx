import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Input from "../../components/input/input-component";
import Button from "../../components/button/button-component";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_GEORGIAN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_PHONENUMBER,
  VALIDATOR_REQUIRE,
} from "../../utils/validation/validation";
import {
  CustomLine,
  NameSurnameContainer,
  PageNum,
  PersonalInfoPageCont,
  Tittle,
  TittleContainer,
  UploadContainer,
  UploadImage,
  UploadTittle,
} from "./personalinfopage-styles";
import { FormContext } from "../../contexts/formcontext";

const PersonalInfoPage = () => {
  const navigate = useNavigate();

  const { validateFinalForm } = useContext(FormContext);

  const handleClick = () => {
    if (validateFinalForm(6)) {
      navigate("/fill-resume/page=experience");
    }
  };

  return (
    <PersonalInfoPageCont>
      <TittleContainer>
        <Tittle>{"პირადი ინფო".toLocaleUpperCase()}</Tittle>
        <PageNum>1/3</PageNum>
      </TittleContainer>
      <CustomLine></CustomLine>
      <NameSurnameContainer>
        <Input
          element={"input"}
          type="text"
          placeholder={"ანზორ"}
          label="სახელი"
          errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
          name="name"
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
          name="surname"
          validators={[
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(),
            VALIDATOR_GEORGIAN(),
          ]}
        />
      </NameSurnameContainer>
      <UploadContainer>
        <UploadTittle>პირადი ფოტოს ატვირთვა</UploadTittle>
        <UploadImage for="img">ატვირთვა</UploadImage>
        <span>
          <Input element={"file"} name="image" />
        </span>
      </UploadContainer>
      <Input
        rows={"6"}
        type="text"
        placeholder={"ზოგადი ინფო შენ შესახებ"}
        label="ჩემ შესახებ (არასავალდებულო)"
        initialValid={true}
        name="personalDescription"
      />

      <Input
        element={"input"}
        type="email"
        placeholder={"anzor666@redberry.ge"}
        label="ელ.ფოსტა"
        errorText={"უნდა მთავრდებოდეს @redberry.ge-ით"}
        name="email"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
      />
      <Input
        element={"input"}
        type="text"
        placeholder={"+995 551 12 34 56"}
        label="მობილურის ნომერი"
        errorText={"უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"}
        name="number"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONENUMBER()]}
      />
      <Button text={"შემდეგი"} onClick={handleClick} />
    </PersonalInfoPageCont>
  );
};

export default PersonalInfoPage;
