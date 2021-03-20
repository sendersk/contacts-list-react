import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  color: ${({theme}) => theme.color.white};
`;
