import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToOrderDetailsPage } from '../../routes/coordinator'
import { Container, ContainerDetails, ShippingText } from './styled'

export const Order = () => {
	const navigate = useNavigate()

	return (
	  <Container onClick={() => goToOrderDetailsPage(navigate)}>
	    <img src={""} alt="Pedido" />
	    <span>Pedido 01</span>
	    <ContainerDetails>
	      <span>
		Ativo
	      </span>
	      <ShippingText>
		Produto: 20 Esfiha(s)
	      </ShippingText>
	    </ContainerDetails>
	  </Container>
	)
}
export default Order