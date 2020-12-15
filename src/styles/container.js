import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  overflow-x: hidden;
  &#content-top{
    padding-bottom: 100px;
    justify-content: flex-start;
    min-height: 0;
  }
`;
