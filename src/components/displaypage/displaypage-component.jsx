import React, { useContext } from "react";
import { FormContext } from "../../contexts/formcontext";
import {
  AboutMe,
  Description,
  EmailContainer,
  ImageContainer,
  MainContainer,
  NameSurname,
  NameSurnameContainer,
  NumberContainer,
  TextContainer,
} from "./displaypage.styles";

import Symbol from "../../assets/@.png";
import CallSymbol from "../../assets/callsymbol.png";

const DisplayPage = () => {
  const { state } = useContext(FormContext);
  console.log(state);
  return (
    <MainContainer>
      <TextContainer>
        <NameSurnameContainer>
          <NameSurname>{state?.name}</NameSurname>
          <NameSurname>{state?.surname}</NameSurname>
        </NameSurnameContainer>
        {state.email && (
          <EmailContainer>
            <img src={Symbol} alt="@" />
            <p>{state?.email}</p>
          </EmailContainer>
        )}
        {state.number && (
          <NumberContainer>
            <img src={CallSymbol} />
            <p>{state?.number}</p>
          </NumberContainer>
        )}
        {state.personalDescription && (
          <div>
            <AboutMe>{"ჩემ შესახებ".toLocaleUpperCase()}</AboutMe>
            <Description>{state?.personalDescription}</Description>
          </div>
        )}
      </TextContainer>
      <ImageContainer>
    {state.image && <img src ={URL.createObjectURL(state.image)} alt='image'/>}
      </ImageContainer>
    </MainContainer>
  );
};

export default DisplayPage;
