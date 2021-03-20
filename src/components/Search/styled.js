import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  height: 7vh;
  background-color: ${({theme}) => theme.color.black};
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
  padding: 2px 10px;

  &:focus {
    outline: none;
  }
`;
