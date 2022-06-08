import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { goToOrderDetailsPage } from '../../routes/coordinator'
import { Container, ContainerDetails, Duration, OrderNumber, OrderStatus, ShippingText } from './styled'

export const Order = ({order}) => {
	const navigate = useNavigate()
	return (
	  <Container onClick={() => goToOrderDetailsPage(navigate,order.id)}>
	    <img src={order.img} alt="Pedido" />
	   
	    <OrderNumber>Pedido {order.number}</OrderNumber>
	    <Duration>Duração: {order.duration} min</Duration>
	    <ContainerDetails>
	      <OrderStatus>
		{order.status}
	      </OrderStatus>
	      <ShippingText>
		Produto: {order.quantity} Esfiha(s)
	      </ShippingText>
	    </ContainerDetails>
	  </Container>
	)
}
export default Order