import React, { useReducer, useEffect, useContext } from "react";

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

const INITIAL_STATE = {
  value: "",
  isValid: false,
  isTouched: false,
  name: "",
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
}) => {
  const { stateChanger, state } = useContext(FormContext);

  const [formState, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const changeHandler = (event) => {
    dispatch({
      type: "Change",
      val: element == "file" ? event.target.files[0] : event.target.value,
      name: name,
      validators: validators || [],
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
    stateChanger(formState);
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
          value={state[name] && state[name].value}
          isValid={formState.isValid}
          isTouched={formState.isTouched}
        />
        {formState.isTouched && !formState.isValid && (
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
        value={formState.value}
        isValid={formState.isValid}
        isTouched={formState.isTouched}
      />
    );

  return (
    <MainContainer>
      <Label
        notValid={!formState.isValid && formState.isTouched && validators}
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
