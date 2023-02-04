import React, { useReducer, useEffect } from "react";
import {
  ErrorText,
  InputStyled,
  Label,
  MainContainer,
  TextAreaStyled,
} from "./input-styles";

const FormReducer = (state, action) => {

  switch (action.type) {
    case "Change": {
      return {
        ...state,
        value: action.val,
        //  isValid: validate(action.val, action.validators)
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

const Input = ({ element, id, type, placeholder, label, errorText, rows }) => {
  const [formState, dispatch] = useReducer(FormReducer, INITIAL_STATE);
  console.log(formState);
  const changeHandler = (event) => {
    dispatch({
      type: "Change",
      val: event.target.value,
      //   validators: props.validators
    });
  };

  const el =
    element === "input" ? (
      <InputStyled
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
       
        value={formState.value}
      />
    ) : (
      <TextAreaStyled
        id={id}
        rows={(rows && rows) || 1}
        placeholder={placeholder}
      
      />
    );

  return (
    <MainContainer
 
    >
      <Label htmlFor={id}>{label}</Label>
      {el}
      {
        
        errorText && <ErrorText>{errorText}</ErrorText>
      }
    </MainContainer>
  );
};

export default Input;
