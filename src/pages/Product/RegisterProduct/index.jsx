import { Container, Flex, Text } from '@chakra-ui/react';
import { Button, Typography } from '@mui/material';
import React from 'react'
import useForm from '../../../hooks/useForm';

import { Contained, StyledInput } from './styled';

export const RegisterProduct = () => {
  const { form, onChangeForm, errors, setErrors, span, setSpan } = useForm({
    nome: "",
    preco:0,
    quantity:0,
    imgURL:""
  });
  return (
    <Contained  justify="center"
    direction="column"
    align="center"
    minH="100vh">
      <Typography variant="h4" p="0.5rem">
          CADASTRO DE PRODUTO
        </Typography>
      <form method='POST'>
     <Container>
        <Text>Nome</Text>
        <StyledInput 
        type={"text"} 
        name={"nome"} 
        required 
        value={form.nome} 
        onChange={onChangeForm}
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
        value={form.preco} 
        onChange={onChangeForm}
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
        value={form.quantity} 
        onChange={onChangeForm}
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
        value={form.imgURL} 
        onChange={onChangeForm}
        size="md"
        w="30rem"
        p="0.5rem"
        placeholder='Digite a URL da imagem do produto'
        />
        </Container>
	<Flex justify="center" align="center" m={"1rem"}>
        <Button type={"submit"} variant="contained">Cadastrar</Button>
        </Flex>
      </form>
    </Contained>
  )
}
