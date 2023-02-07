import React from "react";

import {
  AboutMe,
  Description,
  EmailContainer,
  NameSurname,
  NameSurnameContainer,
  NumberContainer,
  TextContainer,
  ImageContainer,
} from "./displaypersonalinfo-styles";

import Symbol from "../../assets/@.png";
import CallSymbol from "../../assets/callsymbol.png";

const DisplayPersonalInfo = ({ state }) => {


  return (
    <>
      <TextContainer>
        <NameSurnameContainer>
          {state.name && (
            <NameSurname>{state.name?.value.toLocaleUpperCase()}</NameSurname>
          )}
          {state.surname && (
            <NameSurname>
              {state.surname?.value.toLocaleUpperCase()}
            </NameSurname>
          )}
        </NameSurnameContainer>
        {state.email && (
          <EmailContainer>
            <img src={Symbol} alt="@" />
            <p>{state.email?.value}</p>
          </EmailContainer>
        )}
        {state.number && (
          <NumberContainer>
            <img src={CallSymbol} />
            <p>{state.number?.value}</p>
          </NumberContainer>
        )}
        {state.personalDescription && (
          <div>
            <AboutMe>{"ჩემ შესახებ".toLocaleUpperCase()}</AboutMe>
            <Description>{state.personalDescription?.value}</Description>
          </div>
        )}
      </TextContainer>
      <ImageContainer>
        {  state.image && (
        <img src={state.image.value} alt="image" />
        ) }
      </ImageContainer>
    </>
  );
};

export default DisplayPersonalInfo;
