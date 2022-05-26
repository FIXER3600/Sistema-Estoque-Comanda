import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRestaurantDetailsPage } from '../../routes/coordinator'
import { Container, ContainerDetails, ShippingText } from './styled'

export const Restaurant = () => {
	const navigate = useNavigate()

	return (
	  <Container onClick={() => goToRestaurantDetailsPage(navigate)}>
	    <img src={"https://s3.amazonaws.com/gupy5/production/socialmedias/10499/a47ac69595f7b82d74da0505286e0b68_logo.png"} alt="Logo Restaurante" />
	    <span>Habibs</span>
	    <ContainerDetails>
	      <span>
		45 min
	      </span>
	      <ShippingText>
		Frete R$
		15.00
	      </ShippingText>
	    </ContainerDetails>
	  </Container>
	)
}
