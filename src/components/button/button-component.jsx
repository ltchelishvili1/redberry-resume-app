import React from "react";
import { StyledButton } from "./button-styles";

const Button = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
