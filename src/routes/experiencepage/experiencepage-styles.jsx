import styled from "styled-components";

import { PersonalInfoPageCont } from "../personalinfopage/personalinfopage-styles";

export const ExperienceCont = styled(PersonalInfoPageCont)``;

export const DatesContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 90px;
`;

export const AddExperienceButton = styled.button`
  color: #ffff;
  background: #62a1eb;
  border-radius: 4px;
  padding: 18px 60px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 26px;
`;
