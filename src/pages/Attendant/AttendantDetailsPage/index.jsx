import {
	FormControl,
	MenuItem,
	Select,
      } from "@mui/material"
      import React from "react"
      import { useParams } from "react-router-dom"
import { AttendantCardDetails } from "../../../components/AttendantCardDetails"
import { HeaderAttendant } from "../../../components/Header/HeaderAttendant"

   
      import {
	ContainerModal,
	ContainerProductCategory,
	ContainerRestaurantsDetails,
	ModalSelect,
	StyledButton,
      } from "./styled"

export const AttendantDetailsPage = () => {
	const params=useParams()
	return (
		<div>
		  <HeaderAttendant/>
		
		   <ContainerRestaurantsDetails>
		   <AttendantCardDetails
		     profileImg={"https://pbs.twimg.com/media/FRNJDvQWQAAfeWw.jpg"}
		     name={"Toguro"}
		     role={"atendente"}
		     gender={"masculino"}
		     age={"27"}
		     cpf={"222.222.222-52"}
		   />
		 </ContainerRestaurantsDetails>
		
		 
		</div>
	      )
	    }
      
	
	