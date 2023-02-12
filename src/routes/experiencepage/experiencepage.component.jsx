import React, { useContext, useEffect, useCallback, useReducer } from "react";
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
import BackDrop from "../../utils/modal/BackDrop-component";
import {
  EXPERIENCEREDUCER,
  experienceReducer,
} from "../../reducers/experiencereducer/experiencereducer";

const initialState = {
  count: JSON.parse(localStorage.getItem("countArr")) || [0],
  showModal: false,
};

const ExperiencePage = () => {
  const navigate = useNavigate();
  const { validateFinalForm, experienceState } = useContext(ExperienceContext);
  const [state, dispatch] = useReducer(experienceReducer, initialState);

  useEffect(() => {
    localStorage.setItem("countArr", JSON.stringify(state.count));
  }, [state.count]);

  const handleClick = useCallback(() => {
    if (validateFinalForm(5)) {
      dispatch({ type: EXPERIENCEREDUCER.UPDATE_COUNT });
    } else {
      dispatch({ type: EXPERIENCEREDUCER.UPDATE_SHOW_MODAL });
    }
  }, [validateFinalForm]);

  const handleSubmit = useCallback(() => {
    if (
      experienceState.length < state.count.length &&
      experienceState.length !== 0
    ) {
      navigate("/fill-resume/page=knowledge");
    } else {
      if (validateFinalForm(5)) {
        navigate("/fill-resume/page=knowledge");
      } else {
        dispatch({ type: EXPERIENCEREDUCER.UPDATE_SHOW_MODAL });
      }
    }
  }, [experienceState.length, state.count.length, validateFinalForm, navigate]);

  const navigateBack = useCallback(() => {
    navigate("/fill-resume/page=personal-info");
  }, [navigate]);

  const closeModal = useCallback(() => {
    dispatch({ type: "closeModal" });
  }, []);

  const { showModal, count } = state;

  return (
    <ExperienceCont>
      {showModal && (
        <BackDrop
          isVisible
          onClick={closeModal}
          text={"Please fill all necessery fields!"}
        />
      )}
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
