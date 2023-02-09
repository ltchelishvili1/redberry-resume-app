import React, { useContext, useEffect, useState } from "react";

import { DegreeCont, EducationCont } from "./education-page.styles";

import {
  CustomLine,
  PageNum,
  Tittle,
  TittleContainer,
} from "../personalinfopage/personalinfopage-styles";
import Education from "./education-helper";
import { EducationContext } from "../../contexts/educatuincontext";

const EducationPage = () => {
  const { validateFinalForm } = useContext(EducationContext);

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("countArr1")) || [0]
  );

  useEffect(() => {
    localStorage.setItem("countArr1", JSON.stringify(count));
  }, [count]);

  const handleClick = () => {
    if (validateFinalForm(5)) {
      let countArr = [...count];
      countArr.push(count[count.length - 1] + 1);
      setCount(countArr);
    }
  };

  return (
    <EducationCont>
      <TittleContainer>
        <Tittle>{"განათლება".toLocaleUpperCase()}</Tittle>
        <PageNum>3/3</PageNum>
      </TittleContainer>
      <CustomLine></CustomLine>
      {count.map((id) => (
        <Education key={id} count={id} countArr={count} />
      ))}
    </EducationCont>
  );
};

export default EducationPage;
