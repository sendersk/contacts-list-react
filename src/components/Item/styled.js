import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid #aaa;
  padding: 5px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #aaa;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 10px;
`;

export const Header = styled.h2`
  font-size: 20px;
  margin: 0px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  margin: 0px;
`;

export const ToggleContainer = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  margin-right: 6vw;
  border-radius: 30px;
  background-color: #4d4d4d;
  transition: all .2s ease;
`

export const ToggleButton = styled.input`
    
`