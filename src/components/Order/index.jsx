import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { created } from '../../app/orders/orderSlice'
import { goToOrderDetailsPage } from '../../routes/coordinator'
import { Container, ContainerDetails, ShippingText } from './styled'

export const Order = ({order}) => {
	const navigate = useNavigate()
	const dispatch=useDispatch()

	
	return (
	  <Container onClick={() => goToOrderDetailsPage(navigate,order.id)}>
	    <img src={order.img} alt="Pedido" />
	    <span>Pedido {order.number}</span>
	    <ContainerDetails>
	      <span>
		{order.status}
	      </span>
	      <ShippingText>
		Produto: {order.quantity} Esfiha(s)
	      </ShippingText>
	    </ContainerDetails>
	  
	    
	  </Container>
	)
}
export default Order