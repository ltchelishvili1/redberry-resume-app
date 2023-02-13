import React, { useContext, useEffect, useState } from "react";

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
import { EducationContext } from "../../contexts/educatuincontext";

const DisplayPersonalInfo = ({ state }) => {
  const [responseParsed, setResponseParsed] = useState({});
  const { responseData, status } = useContext(EducationContext);

  useEffect(() => {
    let obj = {};
    for (let key in responseData) {
      if (key === "image") {
        obj.image = state.image;
      } else {
        obj[key] = {
          value: responseData[key],
        };
      }
    }
    setResponseParsed(obj);
  }, [responseData]);


  const { name, surname, email, phone_number, about_me, image } =
    status === 201 && responseData ? responseParsed : state;

  if (Object.values(state).filter((val) => val.value === "").length !== 6)
    return (
      <MainContainer>
        <TextContainer>
          <NameSurnameContainer>
            {name && (
              <NameSurname>{name?.value.toLocaleUpperCase()}</NameSurname>
            )}
            {state.surname && (
              <NameSurname>{surname?.value.toLocaleUpperCase()}</NameSurname>
            )}
          </NameSurnameContainer>
          {email && (
            <EmailContainer>
              {email.value && <img src={Symbol} alt="@" />}
              <p>{email?.value}</p>
            </EmailContainer>
          )}
          {phone_number && (
            <NumberContainer>
              {phone_number.value && <img src={CallSymbol} />}
              <p>{phone_number?.value}</p>
            </NumberContainer>
          )}
          {about_me && (
            <div>
              {about_me.value && (
                <AboutMe>{"ჩემ შესახებ".toLocaleUpperCase()}</AboutMe>
              )}
              <Description>
                <span>{about_me?.value}</span>
              </Description>
            </div>
          )}
        </TextContainer>
        <ImageContainer>
          {image && <img src={image.value} alt="image" />}
        </ImageContainer>
      </MainContainer>
    );
};

export default DisplayPersonalInfo;
