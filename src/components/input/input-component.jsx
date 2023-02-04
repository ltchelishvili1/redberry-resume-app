import React, { useReducer, useEffect } from "react";
import { validate } from "../../utils/validation/validation";
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

const FormReducer = (state, action) => {
  switch (action.type) {
    case "Change": {
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    }
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const INITIAL_STATE = {
  value: "",
  isValid: false,
  isTouched: false,
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
}) => {
  const [formState, dispatch] = useReducer(FormReducer, INITIAL_STATE);
  console.log(formState);
  const changeHandler = (event) => {
    dispatch({
      type: "Change",
      val: event.target.value,
      validators: validators || [],
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const el =
    element === "input" ? (
      <InputFieldContainer>
        <InputStyled
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={formState.value}
          isValid={formState.isValid}
          isTouched={formState.isTouched}
        />
        {formState.isTouched && !formState.isValid && (
          <Span>
            <Image src={InvalidInput} alt="notvalid" />
          </Span>
        )}
      </InputFieldContainer>
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
      <Label notValid={!formState.isValid && formState.isTouched && validators} htmlFor={id}>
        {label}
      </Label>
      {el}
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </MainContainer>
  );
};

export default Input;
