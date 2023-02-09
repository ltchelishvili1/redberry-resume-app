import React from "react";
import { StyledButton } from "./button-styles";

const Button = ({ onClick, text,float }) => {
  return <StyledButton float ={float}  onClick={onClick}>{text}</StyledButton>;
};

export default Button;
