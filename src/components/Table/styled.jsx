import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const Container=styled.div`
	width: 75px;
	height: 75px;
	background-color:${(props) =>
    props.livre == "Livre" ? "green" : primaryColor};
    color: white;
    text-align: center;
`
export const TableNumber=styled.p`
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 700;
	font-size: larger;
`