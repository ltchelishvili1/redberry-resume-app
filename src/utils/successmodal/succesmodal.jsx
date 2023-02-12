import React from "react";
import { SuccessModalCont } from "./successmodal-styles";
import Close from "../../assets/close.png";

const SuccesModal = ({ onClick }) => {
  return (
    <SuccessModalCont>
      <span>
        <img src={Close} alt="" onClick={onClick} />
      </span>
      <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
    </SuccessModalCont>
  );
};

export default SuccesModal;
