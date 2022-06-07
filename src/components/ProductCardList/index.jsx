import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToProductDetailsPage } from '../../routes/coordinator'
import { Container, ContainerDetails, ShippingText } from './styled'

export const ProductCardList = ({product}) => {
	const navigate=useNavigate()
  return (
	<Container onClick={()=>goToProductDetailsPage(navigate,product.id)}>
	<img src={product.img} alt="Produto" />
	<span>{product.name}</span>
	<ContainerDetails>
	  <span>R$ {product.price}</span>
	  <ShippingText>{product.restaurant}</ShippingText>
	</ContainerDetails>
      </Container>
  )
}
