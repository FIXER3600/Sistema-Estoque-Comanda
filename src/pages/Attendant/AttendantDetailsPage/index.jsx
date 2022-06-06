import {
	FormControl,
	MenuItem,
	Select,
      } from "@mui/material"
      import React from "react"
      import { useParams } from "react-router-dom"
import { AttendantCardDetails } from "../../../components/AttendantCardDetails"
import { HeaderRestaurant } from "../../../components/Header/HeaderRestaurant"

   
      import {
	ContainerModal,
	ContainerProductCategory,
	ContainerRestaurantsDetails,
	ModalSelect,
	StyledButton,
      } from "./styled"

export const AttendantDetailsPage = ({}) => {
	return (
		<div>
		  <HeaderRestaurant/>
		
		   <ContainerRestaurantsDetails>
		   <AttendantCardDetails
		   />
		 </ContainerRestaurantsDetails>
		
		 
		</div>
	      )
	    }
      
	
	