import React, { useReducer, useEffect, useContext, useState } from "react";

import {
  ErrorText,
  Image,
  InputFieldContainer,
  InputStyled,
  Label,
  MainContainer,
  Span,
  TextAreaStyled,
} from "./input-styles";

import InvalidInput from "../../assets/Vector.png";

import { FormContext } from "../../contexts/formcontext";

import { FormReducer } from "../../reducers/formreducer/formreducer";
import { ExperienceContext } from "../../contexts/experiencecontext";

const INITIAL_STATE = {
  value: "",
  isValid: false,
  isTouched: false,
  name: "",
  sectionName: "default",
};

const Input = ({
  element,
  id,
  type,
  placeholder,
  label,
  errorText,
  rows,
  validators,
  name,
  initialValid,
  styles,
  sectionName,
  count,
  countArr,
}) => {
  const { stateChanger, state } = useContext(FormContext);
  const { experienceState, experienceStateChanger } =
    useContext(ExperienceContext);
  let value;

  if (sectionName === "experience") {
    if (
      experienceState &&
      experienceState[count] &&
      experienceState[count][name]
    ) {
      value = experienceState[count][name];
    }
  }else{
   value = state[name] || ""
  }

  const [formState, dispatch] = useReducer(FormReducer, INITIAL_STATE);

 
  const changeHandler = (event) => {
    dispatch({
      type: "Change",
      val: element == "file" ? event.target.files[0] : event.target.value,
      name: name,
      validators: validators || [],
      sectionName: sectionName ? sectionName : "default",
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  useEffect(() => {
    if (!validators) {
      dispatch({
        type: "IsValid",
        val: initialValid,
      });
    }
  }, []);
  useEffect(() => {
    switch (formState.sectionName) {
      case "default":
        stateChanger(formState);

      case "experience":
        experienceStateChanger(formState, count, countArr);
      default:
    }

    if (formState.sectionName === "default") {
    }
  }, [formState]);
  const el =
    element === "input" ? (
      <InputFieldContainer>
        <InputStyled
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={value && value.value}
          isValid={value && value.isValid}
          isTouched={value && value.isTouched}
          style={{ ...styles }}
        />
        {value && value.isTouched && !value.isValid && (
          <Span>
            <Image src={InvalidInput} alt="notvalid" />
          </Span>
        )}
      </InputFieldContainer>
    ) : element === "file" ? (
      <input
        type="file"
        id="img"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    ) : (
      <TextAreaStyled
        id={id}
        rows={(rows && rows) || 1}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value && value.value}
        isValid={value && value.isValid}
        isTouched={value && value.isTouched}
        style={{ ...styles }}
      />
    );

  return (
    <MainContainer>
      <Label
        notValid={value && !value.isValid && value.isTouched && validators}
        htmlFor={id}
      >
        {label}
      </Label>
      {el}
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </MainContainer>
  );
};

export default Input;
