import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../../pages/Product/productList'
import { goToProductEditPage } from '../../routes/coordinator'
import { Address, Category, Container, ContainerDetails, ContainerNumb, Img, Name } from './styled'
import Edit from "../../assets/edit.png";
export const ProductCardDetails = () => {
	const param=useParams()
	const navigate=useNavigate()
	const findProduct=()=>{
		return products.find((prod)=>prod.id==param.id)
	      }
  return (
    <div> <ContainerDetails>
    <Img src={findProduct().img} alt="Imagem do Pedido" />
    <img src={Edit} onClick={() => goToProductEditPage(navigate,param.id)} />
    <Container>
      <Name>{findProduct().name}</Name>
   
      <Category>R$ {findProduct().price}</Category>
      <ContainerNumb>
	      <p>
	 
	  {findProduct().restaurant}
	</p>
	
	
      </ContainerNumb>
      <p>
	  {findProduct().description}
	</p>
      <Address>{findProduct().quantity}</Address>
    </Container>
  </ContainerDetails></div>
  )
}
