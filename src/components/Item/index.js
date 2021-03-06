import React from "react";
import { Wrapper, Avatar, Content, Header, Paragraph } from "./styled";

function Item({ avatar, name, email }) {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="" />
      <Content>
        <Header>{name}</Header>
        <Paragraph>{email}</Paragraph>
      </Content>
    </Wrapper>
  );
}

export default Item;
