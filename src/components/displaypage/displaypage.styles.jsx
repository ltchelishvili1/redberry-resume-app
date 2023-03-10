import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  height: 850px;
  padding: 48px 80px 44px 75px;
  background-color: white;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #bec4c4;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  ${({ wholePage }) =>
    wholePage &&
    css`
      margin: auto;
      width: 742px;
      border: 0.8px solid #000000;
      margin: 54px auto;
      padding: 0 80px;
      height: 1080px;
    `}
`;

export const LogoCont = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 44px;
`;

export const BackToWelcomeCont = styled.img`
  position: absolute;
  top: 45px;
  left: 48px;
`;
