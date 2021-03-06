import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  height: 7vh;
  background-color: #000;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 5px;
  border-bottom: 3px solid black;

  &:focus {
    outline: none;
  }
`;
