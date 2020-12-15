import styled from "styled-components";

export const InsertInput = styled.input`
  border: 0;
  border-bottom: 2px solid #1a8fe8;
  padding: 20px;
  color: inherit;
  display: flex;
  font-size: 50px;
  width: auto;
  width: 250px;
  text-align: center;
  outline: 0;
  transition: 0.2s;
  background-color: transparent;
  &:focus {
    font-size: 75px;
    border-bottom-width: 5px;
  }
`;
