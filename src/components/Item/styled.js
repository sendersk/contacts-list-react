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

export const ToggleContainer = styled.label`
  position: relative;
  margin-right: 30px;
`;

export const ToggleButton = styled.input`
  position: absolute;

  &:checked + span {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);

    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

export const Span = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: #999;
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }

  &:active:before{
    width: 28px;
  }
`;
