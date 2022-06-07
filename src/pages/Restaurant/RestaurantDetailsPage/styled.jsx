import { Button } from "@mui/material"
import styled from "styled-components"
import { neutralColor } from "../../../constants/colors"
export const ContainerModal = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0; 
`
export const ModalSelect = styled.div`
  width: 20.5rem;
  height: 13.5rem;
  margin: 1.688rem 1rem 1.813rem;
  padding: 2.688rem 1rem 1.938rem 1rem  ;
  background-color: #fff;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.375rem 0 0 1rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${neutralColor};
  }
`
export const StyledButton = styled(Button) `
    align-self: flex-end;
`