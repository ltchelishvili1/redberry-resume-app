import React, { useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

import { MotionDiv, ModalCont, Mess } from "./BackDrop-styles";

const BackDrop = ({ onClick, isVisible,text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionDiv
          onClick={onClick}
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1, }}
          exit={{ opacity: 0 }}
        >
          <ModalCont>
            <Mess data-aos="zoom-out">{text}</Mess>
          </ModalCont>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default BackDrop;
