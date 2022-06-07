import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../../pages/Product/productList'
import { goToProductEditPage } from '../../routes/coordinator'
import { Address, Category, Container, ContainerDetails, ContainerNumb, Img, Name } from './styled'
import Edit from "../../assets/edit.png";
import { Flex } from '@chakra-ui/react'
export const ProductCardDetails = () => {
	const param=useParams()
	const navigate=useNavigate()
	const findProduct=()=>{
		return products.find((prod)=>prod.id==param.id)
	      }
  return (
    <div> <ContainerDetails>
    <Img src={findProduct().img} alt="Imagem do Pedido" />
    <Flex justifyContent={"flex-end"}>
    <img src={Edit} onClick={() => goToProductEditPage(navigate,param.id)} />
    </Flex>
    <Container>
      <Name>{findProduct().name}</Name>
   
      <Category>R$ {findProduct().price}</Category>
      <ContainerNumb>
	      <p>
        Restaurante: 
	  {" "+ findProduct().restaurant}
	</p>
	
	
      </ContainerNumb>
      <p>
	  {findProduct().description}
	</p>
      <Address>Quantidade em estoque: {findProduct().quantity}</Address>
    </Container>
  </ContainerDetails></div>
  )
}
