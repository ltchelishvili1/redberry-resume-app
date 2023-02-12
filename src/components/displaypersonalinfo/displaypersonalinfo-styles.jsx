import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 61% 39%;
 
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageContainer = styled.div`
  img {
    width: 246px;
    height: 246px;
    border-radius: 50%;
    margin-top: 28px;
  }
`;
export const NameSurnameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NameSurname = styled.p`
  color: #f93b1d;
  font-size: 34px;
  font-weight: 700;
  padding-top: 18px;
  height: 10px;
  padding-bottom: 17px;
`;

export const EmailContainer = styled.span`
  display: flex;
  align-items: center;
  max-height: 21px;
  gap: 11.67px;
  img {
    padding-left: 2px;
  }
  p {
    color: #1a1a1a;
    font-size: 18px;
  }
`;

export const NumberContainer = styled(EmailContainer)`
  padding-top: 10px;
`;

export const AboutMe = styled.p`
  color: #f93b1d;
  font-weight: 700;
  font-size: 18px;
  
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  span{
    display:block;
    width:432px;
    word-wrap:break-word;
  }
`;
