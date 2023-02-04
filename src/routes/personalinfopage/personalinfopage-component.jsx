import React from "react";
import Input from "../../components/input/input-component";
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
        />{" "}
        <Input
          element={"input"}
          type="text"
          placeholder={"მუმლაძე"}
          label="გვარი"
          errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
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
        type="text"
        placeholder={"anzor666@redberry.ge"}
        label="ელ.ფოსტა"
        errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
      />
      <Input
        element={"input"}
        type="text"
        placeholder={"+995 551 12 34 56"}
        label="მობილურის ნომერი"
        errorText={"მინიმუმ 2 ასო, ქართული ასოები"}
      />
    </PersonalInfoPageCont>
  );
};

export default PersonalInfoPage;
