import { TextField } from "@mui/material";
import styled from "styled-components";
export const ContainerHeader=styled.div`
 display: flex;
 justify-content: baseline;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top:3rem;
  margin-bottom: 8px;
  z-index: 1;
  width: 100%;
  position: fixed;
  top: -20px;

  font-family:  "Roboto";
  p {
    align-self: center;
    font-weight: bold;
    font-size:1.5rem;
  }
`
export const StyledInput=styled(TextField)`
  width: 14rem;
  height: 2rem;
  margin: 0.5rem 1rem;
  border-radius: 30px;
  
`