import styled from "styled-components";

export const SuccessModalCont = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  right: 40px;
  top: 53px;
  height: 167px;
  width: 22%;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  p {
    font-weight: 500;
    font-size: 28px;
    padding: 0 30px;

  }
  span{
    position: absolute;
    right: 11.44px;
    top: 17.44px;
  }
`;
