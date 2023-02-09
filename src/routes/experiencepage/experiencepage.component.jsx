import React, { useContext, useEffect, useState } from "react";
import { ExperienceContext } from "../../contexts/experiencecontext";

import { useNavigate } from "react-router-dom";

import {
  CustomLine,
  PageNum,
  Tittle,
  TittleContainer,
} from "../personalinfopage/personalinfopage-styles";
import Experience from "./experiencehelper";
import {
  AddExperienceButton,
  ButtonContainer,
  DatesContainer,
  ExperienceCont,
} from "./experiencepage-styles";
import Button from "../../components/button/button-component";

const ExperiencePage = () => {
  const { validateFinalForm, experienceState } = useContext(ExperienceContext);

  const navigate = useNavigate();

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("countArr")) || [0]
  );

  useEffect(() => {
    localStorage.setItem("countArr", JSON.stringify(count));
  }, [count]);

  const handleClick = () => {
    if (validateFinalForm(5)) {
      let countArr = [...count];
      countArr.push(count[count.length - 1] + 1);
      setCount(countArr);
    }
  };

  const handleSubmit = () => {
    if (experienceState.length < count.length && experienceState.length!==0) {
      //if it is true curnt experience field is untouched and previus is valid
      navigate("/fill-resume/page=knowledge");
    } else {
      if (validateFinalForm(5)) {
        navigate("/fill-resume/page=knowledge");
      }
    }
  };

const navigateBack = () => {
  navigate("/fill-resume/page=personal-info");
}

  return (
    <ExperienceCont>
      <TittleContainer>
        <Tittle>{"გამოცდილება".toLocaleUpperCase()}</Tittle>
        <PageNum>2/3</PageNum>
      </TittleContainer>
      <CustomLine></CustomLine>
      {count.map((id) => (
        <Experience key={id} count={id} countArr={count} />
      ))}
      <AddExperienceButton onClick={handleClick}>
        მეტი გამოცდილების დამატება
      </AddExperienceButton>
      <ButtonContainer>
        <Button text={"უკან"} onClick={navigateBack} />
        <Button text={"შემდეგი"} onClick={handleSubmit} float />
      </ButtonContainer>
    </ExperienceCont>
  );
};

export default ExperiencePage;
