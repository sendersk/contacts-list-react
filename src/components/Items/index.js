import React, { useState, useEffect } from "react";
import { SearchWrapper, SearchInput } from "../Search/styled";
import Item from "../Item/index";
import { Wrapper } from "./styled";

function Items() {
  const apiURL =
    "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(true);

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
        <SearchInput
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search..."
        />
      </SearchWrapper>
      {users
        .sort((a, b) => a.last_name.localeCompare(b.last_name))
        .filter((user) => {
          if (searchTerm === "") {
            return user;
          } else if (
            user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return user;
          } else {
            return 0;
          }
        })
        .map((user) => (
          <Item
            key={user.id}
            avatar={user.avatar}
            name={user.first_name + " " + user.last_name}
            email={user.email}
            triggerToggle={() => {
              setToggle(!toggle);
            }}
          />
        ))}
    </Wrapper>
  );
}

export default Items;
