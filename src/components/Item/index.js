import React from "react";
import {
  Wrapper,
  Avatar,
  Content,
  Header,
  Paragraph,
  ToggleButton,
} from "./styled";

function Item({ avatar, name, email, triggerToggle }) {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="" />
      <Content>
        <Header>{name}</Header>
        <Paragraph>{email}</Paragraph>
      </Content>
      <ToggleButton type="checkbox" onChange={triggerToggle} />
    </Wrapper>
  );
}

export default Item;
