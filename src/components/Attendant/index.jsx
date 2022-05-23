import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ContainerDetails, ShippingText } from './styled'

export const Attendant = () => {
	const navigate = useNavigate()

	return (
	  <Container onClick={() => goToAttendantPage(navigate, id)}>
	   <img src={"https://amadahipertrofia.com/wp-content/uploads/2021/09/Tiago-toguro.jpg"} alt="Atendente" />
	    <span>Toguro</span>
	    <ContainerDetails>
	      <span>
		27 anos
	      </span>
	      <ShippingText>
		Sexo: Masculino
	      </ShippingText>
	    </ContainerDetails>
	  </Container>
	)
}
