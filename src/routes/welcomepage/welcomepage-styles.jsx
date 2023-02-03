import styled from "styled-components";

import WelcomeBackgroundImage from "../../assets/back.png";

export const WelcomePageContainer = styled.div`
  padding: 25px 70px;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${WelcomeBackgroundImage});
`;
export const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(37%, -25%);
  z-index: -1;
`;

export const LogoContainer = styled.div`
  display: grid;
`;


export const Button = styled.button`
  position: absolute;
  width: 24.2%;
  height: 60px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
`;
