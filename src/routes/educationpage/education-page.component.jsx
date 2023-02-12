import React, { useCallback, useContext, useEffect, useReducer } from "react";

import axios from "axios";

import { AddEducationButton, EducationCont } from "./education-page.styles";

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
import LoadSpinner from "../../utils/spinner/LoadSpinner";
import {
  EDUCATIONREDUCER,
  educationReducer,
} from "../../reducers/educationpagereducer.js/educationpagereducer";

const initialState = JSON.parse(localStorage.getItem("countArr1")) || [0];

const sendData = async (
  finalPersonalState,
  pNumber,
  navigate,
  setIsLoading
) => {
  setIsLoading(true);

  try {
    const res = await fetch(finalPersonalState.image);
    const blob = await res.blob();

    const { status } = await axios.post(
      "https://resume.redberryinternship.ge/api/cvs",
      {
        ...finalPersonalState,
        image: blob,
        phone_number: pNumber,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (status === 201) {
      navigate("/cv-created");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

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

  const [state, dispatch] = useReducer(educationReducer, {
    showModal: false,
    count: initialState,
    isLoading: false,
  });

  const { validateFinalForm, educationState } = useContext(EducationContext);
  const { experienceState } = useContext(ExperienceContext);
  const { state: formState } = useContext(FormContext);

  useEffect(() => {
    localStorage.setItem("countArr1", JSON.stringify(state.count));
  }, [state.count]);

  const handleClick = useCallback(() => {
    if (validateFinalForm(4)) {
      dispatch({
        type: EDUCATIONREDUCER.UPDATE_COUNT,
        payload: state.count[state.count.length - 1] + 1,
      });
    } else {
      dispatch({ type: EDUCATIONREDUCER.TOGGLE_MODAL });
    }
  }, [state.count, validateFinalForm]);

  const closeModal = useCallback(() => {
    dispatch({ type: EDUCATIONREDUCER.TOGGLE_MODAL });
  }, []);

  const handleSubmitForm = async () => {
    let pNumber = formState.phone_number.value.replaceAll(" ", "");

    let experienceArray = finalizeInputArrays(experienceState);
    let educationArray = finalizeInputArrays(educationState);

    let finalPersonalState = {
      educations: educationArray,
      experiences: experienceArray,
    };

    Object.keys(formState).forEach(
      (key) => (finalPersonalState[key] = formState[key].value)
    );

    const resp = await sendData(finalPersonalState, pNumber, navigate, () =>
      dispatch({ type: EDUCATIONREDUCER.TOGGLE_LOADING })
    );
  };

  const handleSubmit = () => {
    if (
      educationState.length < state.count.length &&
      educationState.length !== 0
    ) {
      handleSubmitForm();
    } else {
      if (validateFinalForm(4)) {
        handleSubmitForm();
      } else {
        dispatch({ type: EDUCATIONREDUCER.TOGGLE_MODAL });
      }
    }
  };

  const navigateBack = () => {
    navigate("/fill-resume/page=experience");
  };

  const { isLoading, count, showModal } = state;
  return (
    <EducationCont>
      {isLoading && <LoadSpinner asOverlay />}
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
        <Education key={`123${id}`} count={id} countArr={count} />
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
