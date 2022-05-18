import { TextField } from "@mui/material"
import styled from "styled-components"

export const Contained=styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  max-height: 100%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  h3{
	
    height: 1.125rem;
	margin: 1rem;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    padding: 0.75rem 2rem;

  }
  p{
	margin: 1rem;
	padding-top:6rem;
	padding-bottom: 1rem;
	
  }
`
export const StyledInput=styled(TextField)`
  width: 18rem;
  height: 3.5rem;
  margin: 0.5rem 1rem;

  border-radius: 2px;
`
