import { Container, Flex, Text } from '@chakra-ui/react'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { HeaderRestaurant } from '../../../components/Header/HeaderRestaurant'
import { Contained, StyledInput } from './styled'

export const ProductEditPage = () => {
  return (
    <div>
	  <HeaderRestaurant/>  
	  <Contained  justify="center"
    direction="column"
    align="center"
    minH="100vh">
      <Typography variant="h4" p="0.5rem">
          EDITAR PRODUTO
        </Typography>
      <form method='PUT'>
     <Container>
        <Text>Nome</Text>
        <StyledInput 
        type={"text"} 
        name={"nome"} 
        required 
        size="md"
        w="30rem"
        p="0.5rem"
        placeholder='Digite o Nome do Produto'
        autoComplete="name"/>
        </Container>
        <Container>
        <Text>Preço</Text>
        <StyledInput 
        type={"number"} 
	min="0"
        name={"preco"} 
        required 
        size="md"
        w="30rem"
        p="0.5rem"
        placeholder='Digite o Logradouro'/>
        </Container>
        <Container>
        <Text>Quantidade</Text>
	<StyledInput 
        type={"number"} 
        name={"quantity"} 
	min="0"
        required 
        size="md"
        w="30rem"
        p="0.5rem"
        placeholder='Digite a Quantidade no estoque'/>
        </Container>
	<Container>
        <Text>Image URL (opcional)</Text>
        <StyledInput 
        type={"text"} 
        name={"imgURL"} 
        required 
        size="md"
        w="30rem"
        p="0.5rem"
        placeholder='Digite a URL da imagem do produto'
        />
        </Container>
	<Flex justify="center" align="center" m={"1rem"}>
        <Button type={"submit"} variant="contained">Editar</Button>
        </Flex>
      </form>
    </Contained>

	</div>
  )
}
