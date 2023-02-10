import styled from "styled-components";

import { motion } from "framer-motion";

export const Mess = styled.h1`
  font-size: 30px;
  cursor: default;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const ModalCont = styled.div`
  width: 50%;
  height: 40%;
  background-color: #1f93ff70;
  display: grid;
  place-items: center;
  border-radius: 10px;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    font-size: 20px;
  }
`;

export const MotionDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: #00000086;
  display: flex;
  align-items: center;
  justify-content: center;
`;
