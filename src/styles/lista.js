import styled from "styled-components";

export const ListaElement = styled.ul`
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;
    margin-bottom: 0;
    cursor: pointer;
    &:hover{
      scale: 1.5;
    }
    span{
      margin: 2px 0;
      font-size: 10px;
    }
    
    h2{
        color: #1a8fe8;
        font-size: 35px;
    }
  }
`;
