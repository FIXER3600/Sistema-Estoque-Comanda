import styled from "styled-components";

export const ContainerHeader=styled.div`
 display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;

  margin-bottom: 8px;
  z-index: 1;
  width: 100%;

  position: fixed;
  top: 0;
  font-family:  "Roboto";
  p {
    align-self: center;
    font-weight: bold;
    font-size:1.5rem;
  }
`