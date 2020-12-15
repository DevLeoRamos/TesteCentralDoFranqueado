import styled from "styled-components";

export const NumberButton = styled.button`
  border: 2px solid #1a8fe8;
  background-color: transparent;
  outline: 0;
  transition: 0.3s;
  opacity: 1;
  scale: 1;
  margin: 50px 0;
  padding: 10px 25px;
  color: whitesmoke;
  cursor: pointer;
  display: block;
  max-height: 1000px;
  font-size: 20px;
  &:hover{
      background-color: #1a8fe8;
  }
  &.hidden{
      opacity: 0;
      scale: 0;
      margin: 0;
      max-height: 0;
      pointer-events: none;
  }
`;
