import React from "react";
import {
  Wrapper,
  Avatar,
  Content,
  Header,
  Paragraph,
  ToggleContainer,
  ToggleButton,
  Span,
} from "./styled";

function Item({ avatar, name, email, triggerToggle }) {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="" />
      <Content>
        <Header>{name}</Header>
        <Paragraph>{email}</Paragraph>
      </Content>
      <ToggleContainer>
        <ToggleButton type="checkbox" onChange={triggerToggle} />
        <Span />
      </ToggleContainer>
    </Wrapper>
  );
}

export default Item;
