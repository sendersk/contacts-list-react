import React, { useState, useEffect } from "react";
import { SearchWrapper, SearchInput } from "../Search/styled";
import Item from "../Item/index"
import {Wrapper} from "./styled"

function Items() {
  const apiURL =
    "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setUsers(data);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput type="text" />
      </SearchWrapper>
      {users.map((user) => (
        <Item 
          name={`${user.first_name}` + " "  +  `${user.last_name}`}
        />
      ))}
    </Wrapper>
  );
}

export default Items;
