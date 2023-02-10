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
  MainContainer,
} from "./displaypersonalinfo-styles";

import Symbol from "../../assets/@.png";
import CallSymbol from "../../assets/callsymbol.png";

const DisplayPersonalInfo = ({ state }) => {
  if(Object.values(state).filter((val) => val.value === '').length !== 6)
  return (
    <MainContainer>
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
            {state.email.value && <img src={Symbol} alt="@" />}
            <p>{state.email?.value}</p>
          </EmailContainer>
        )}
        {state.phone_number && (
          <NumberContainer>
            {state.phone_number.value && <img src={CallSymbol} />}
            <p>{state.phone_number?.value}</p>
          </NumberContainer>
        )}
        {state.about_me && (
          <div>
            {state.about_me.value && (
              <AboutMe>{"ჩემ შესახებ".toLocaleUpperCase()}</AboutMe>
            )}
            <Description>{state.about_me?.value}</Description>
          </div>
        )}
      </TextContainer>
      <ImageContainer>
        {state.image && <img src={state.image.value } alt="image" />}
      </ImageContainer>
    </MainContainer>
  );
};

export default DisplayPersonalInfo;
