import styled from "styled-components";

export const InputStyled = styled.input`
  width: calc(100% - 12px);
  height: 48px;
  color: #bcbcbc;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 800;
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

export const TextAreaStyled = styled.textarea`
  width: calc(100% - 12px);
  color: #bcbcbc;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  margin-top: 10px;
  padding: 15px 0 0 15px;
  max-height: 100px;
  font-size: 16px;
`;