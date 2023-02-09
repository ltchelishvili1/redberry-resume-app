import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2.26rem;
  background-color: #6b40e3;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.08em;
  border-radius: 4px;
  width: 151px;
  ${({ float }) =>
    float &&
    css`
      float: right;
    `};
`;
