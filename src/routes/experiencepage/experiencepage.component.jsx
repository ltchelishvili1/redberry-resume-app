import React, { useContext, useState } from "react";
import { ExperienceContext } from "../../contexts/experiencecontext";

import {
  CustomLine,
  PageNum,
  Tittle,
  TittleContainer,
} from "../personalinfopage/personalinfopage-styles";
import Experience from "./experiencehelper";
import { DatesContainer, ExperienceCont } from "./experiencepage-styles";

const ExperiencePage = () => {
  const [count, setCount] = useState([0]);

  const {experienceState,setExperienceState} = useContext(ExperienceContext)

  const handleClick = () => {
    let countArr = [...count];
    countArr.push(count[count.length - 1] + 1);
    setCount(countArr);
 
  
   
  };
  return (
    <ExperienceCont>
      <TittleContainer>
        <Tittle>{"გამოცდილება".toLocaleUpperCase()}</Tittle>
        <PageNum>2/3</PageNum>
      </TittleContainer>
      <CustomLine></CustomLine>
      {count.map((id) => (
        <Experience key={id} count={id} countArr={count}/>
      ))}
      <button onClick={handleClick}>Add Experience</button>
    </ExperienceCont>
  );
};

export default ExperiencePage;
