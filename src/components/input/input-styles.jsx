import styled, { css } from "styled-components";

import IsValidIcon from "../../assets/valid.png";

export const Label = styled.label`
  font-size: 16px;
  font-weight: 800;

  ${({ notValid }) =>
    notValid &&
    css`
     color #ef5050;
    `};
`;

export const InputStyled = styled.input`
  width: calc(100% - 12px);
  height: 48px;
  color: #bcbcbc;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 16px;

  ${({ isValid, isTouched }) =>
    isValid && isTouched
      ? css`
          background-image: url(${IsValidIcon});
          background-repeat: no-repeat;
          background-position: calc(100% - 15px);
          background-size: 18px;
          border: 1px solid #98e37e;
          border-radius: 4px;
        `
      : !isValid && isTouched
      ? css`
          border: 1px solid #ef5050;
          border-radius: 4px;
        `
      : isValid && !isTouched};
`;

export const TextAreaStyled = styled.textarea`
  width: calc(100% - 12px);
  color: #bcbcbc;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  margin-top: 10px;
  padding: 15px 0 0 15px;
  max-height: 100px;
  font-size: 16px;

  ${({ isValid, isTouched }) =>
    isValid && isTouched
      ? css`
          border: 1px solid #98e37e;
          border-radius: 4px;
        `
      : !isValid && isTouched
      ? css`
          border: 1px solid #ef5050;
          border-radius: 4px;
        `
      : null}


`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: #2e2e2e;
  opacity: 0.7;
`;

export const MainContainer = styled.div`
  width: 100%;
  margin: 31px 0;
`;

export const InputFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 100% auto;
  place-items: center;
  width: 100%;
`;

export const Image = styled.img`
  margin-top: 10px;
  margin-left: 13.5px;
`;
