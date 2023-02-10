import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import {
  AddEducationButton,
  DegreeCont,
  EducationCont,
} from "./education-page.styles";

import {
  CustomLine,
  PageNum,
  Tittle,
  TittleContainer,
} from "../personalinfopage/personalinfopage-styles";
import Education from "./education-helper";
import { EducationContext } from "../../contexts/educatuincontext";
import BackDrop from "../../utils/modal/BackDrop-component";
import { ButtonContainer } from "../experiencepage/experiencepage-styles";
import Button from "../../components/button/button-component";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../contexts/formcontext";
import { ExperienceContext } from "../../contexts/experiencecontext";
import { useHttpClient } from "../../hooks/sendrequesthook";

export const finalizeInputArrays = (arr) => {
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    let finalPersonalState = {};
    let objKeys = Object.keys(arr[i]);

    for (let j = 0; j < objKeys.length; j++) {
      finalPersonalState[objKeys[j]] = arr[i][objKeys[j]].value;
    }
    finalArr.push(finalPersonalState);
  }
  return finalArr;
};

const EducationPage = () => {
  const navigate = useNavigate();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [dt, setDt] = useState();

  const { validateFinalForm, educationState } = useContext(EducationContext);
  const { experienceState } = useContext(ExperienceContext);
  const { img, state } = useContext(FormContext);

  const [showModal, setShowModal] = useState(false);

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("countArr1")) || [0]
  );

  useEffect(() => {
    localStorage.setItem("countArr1", JSON.stringify(count));
  }, [count]);

  const handleClick = () => {
    if (validateFinalForm(4)) {
      let countArr = [...count];
      countArr.push(count[count.length - 1] + 1);
      setCount(countArr);
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmitForm = async () => {
    state.phone_number.value = state.phone_number.value.replaceAll(" ", "");

    let experienceArray = finalizeInputArrays(experienceState);
    let educationArray = finalizeInputArrays(educationState);

    let finalPersonalState = {
      educations: educationArray,
      experiences: experienceArray,
    };

    console.log(dt);
    Object.keys(state).forEach(
      (key) => (finalPersonalState[key] = state[key].value)
    );

      console.log(finalPersonalState)

    await fetch(finalPersonalState.image)
      .then((res) => res.blob())
      .then((blob) => {
        axios
          .post(
            "https://resume.redberryinternship.ge/api/cvs",
            { ...finalPersonalState, image: blob },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    console.log(dt);
  };

  const handleSubmit = () => {
    if (educationState.length < count.length && educationState.length !== 0) {
      //if it is true curnt experience field is untouched and previus is valid
      handleSubmitForm();
    } else {
      if (validateFinalForm(4)) {
        handleSubmitForm();
      } else {
        setShowModal(true);
      }
    }
  };

  const navigateBack = () => {
    navigate("/fill-resume/page=experience");
  };

  return (
    <EducationCont>
      {showModal && (
        <BackDrop
          isVisible
          onClick={closeModal}
          text={"Please fill all necessery fields!"}
        />
      )}
      <TittleContainer>
        <Tittle>{"განათლება".toLocaleUpperCase()}</Tittle>
        <PageNum>3/3</PageNum>
      </TittleContainer>
      <CustomLine></CustomLine>

      {count.map((id) => (
        <Education key={id} count={id} countArr={count} />
      ))}

      <AddEducationButton onClick={handleClick}>
        სხვა სასწავლებლის დამატება
      </AddEducationButton>

      <ButtonContainer>
        <Button text={"უკან"} onClick={navigateBack} />
        <Button text={"შემდეგი"} onClick={handleSubmit} float />
      </ButtonContainer>
    </EducationCont>
  );
};

export default EducationPage;
