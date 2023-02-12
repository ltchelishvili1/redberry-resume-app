import React, { useReducer, useEffect, useContext, useCallback } from "react";

import {
  ErrorText,
  Image,
  InputFieldContainer,
  InputStyled,
  Label,
  MainContainer,
  OptionFieldContainer,
  SelectStyled,
  Span,
  TextAreaStyled,
} from "./input-styles";

import IsValidIcon from "../../assets/valid.png";

import InvalidInput from "../../assets/Vector.png";

import { FormContext } from "../../contexts/formcontext";

import { FormReducer } from "../../reducers/formreducer/formreducer";
import { ExperienceContext } from "../../contexts/experiencecontext";
import { EducationContext } from "../../contexts/educatuincontext";

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
  vals,
}) => {
  const { stateChanger, state } = useContext(FormContext);
  const { experienceState, experienceStateChanger } =
    useContext(ExperienceContext);

  const { educationState, educationStateChanger } =
    useContext(EducationContext);

  let value;

  if (sectionName === "experience") {
    if (
      experienceState &&
      experienceState[count] &&
      experienceState[count][name]
    ) {
      value = experienceState[count][name];
    }
  } else if (sectionName === "education") {
    if (
      educationState &&
      educationState[count] &&
      educationState[count][name]
    ) {
      value = educationState[count][name];
    }
  } else {
    value = state[name] || "";
  }

  const [formState, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const changeHandler = useCallback(
    ({ target: { value, files } }) => {
      const val = element === "file" ? files[0] : value;

      dispatch({
        type: "Change",
        val,
        name,
        validators: validators || [],
        sectionName: sectionName ? sectionName : "default",
      });
    },
    [dispatch, element, name, validators, sectionName]
  );

  const touchHandler = useCallback(() => {
    dispatch({
      type: "TOUCH",
    });
  }, [dispatch]);

  useEffect(() => {
    if (!validators) {
      dispatch({
        type: "IsValid",
        val: initialValid,
      });
    }
  }, [validators, dispatch, initialValid]);

  useEffect(() => {
    switch (formState.sectionName) {
      case "default":
        stateChanger(formState);
        break;

      case "experience":
        experienceStateChanger(formState, count, countArr);
        break;
      case "education":
        educationStateChanger(formState, count, countArr);
        break;

      default:
    }
  }, [formState, count, countArr]);

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

        {type === "date" && value && value.isTouched && value.isValid && (
          <Span>
            <Image src={IsValidIcon} alt="valid" />
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
    ) : element === "option" ? (
      <OptionFieldContainer>
        <SelectStyled
         
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={value && value.value}
          isValid={value && value.isValid}
          isTouched={value && value.isTouched}
          style={{ ...styles }}
          defaultValue= "def"
        >
          <option  value="def" disabled hidden>
            აირჩიეთ ხარისხი
          </option >
          
          {vals.map((degree, index) => (
            <option id={`${degree.id}-${degree.title}-${index}`} value={degree.id}>
              {degree.title}

            </option>
          ))}
        </SelectStyled>
        {value && value.isTouched && !value.isValid && (
          <Span>
            <Image src={InvalidInput} alt="notvalid" />
          </Span>
        )}

        {value && value.isTouched && value.isValid && (
          <Span>
            <Image src={IsValidIcon} alt="valid" />
          </Span>
        )}
      </OptionFieldContainer>
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
    <MainContainer key={`int` + name}>
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
