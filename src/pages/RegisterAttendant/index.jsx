import { Container, Flex, Text } from '@chakra-ui/react';
import { Button, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { goToLoginPage } from '../../routes/coordinator';
import { Contained, StyledInput } from './styled';

export const RegisterAttendant = () => {
  const { form, onChangeForm, errors, setErrors, span, setSpan } = useForm({
    nome: "",
    sobrenome:"",
    sexo:"",
    idade: 0,
    tel:"",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate=useNavigate();
  return (
    <Contained  justify="center"
    direction="column"
    align="center"
    minH="100vh">
      <Typography variant="h4" pb="0.5rem">
          CADASTRO ATENDENTE
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
        placeholder='Digite seu Nome'
        autoComplete="name"/>
        </Container>
        <Container>
        <Text>Sobrenome</Text>
        <StyledInput 
        type={"text"} 
        name={"sobrenome"} 
        required 
        value={form.sobrenome} 
        onChange={onChangeForm}
        size="md"
        w="30rem"
        p="0.5rem"
        
        placeholder='Digite seu Sobrenome'/>
        </Container>
        <Container>
        <Text>Sexo</Text>
        <Select autoWidth={true} 
        onChange={onChangeForm} 
        name={"sexo"} 
        value={form.sexo} 
        required 
        label="Selecione seu sexo">
          <MenuItem value={"masculino"}>Masculino</MenuItem>
          <MenuItem value={"feminino"}>Feminino</MenuItem>
          <MenuItem value={"notinformed"}>Prefiro não dizer</MenuItem>
        </Select>
        </Container>
        <Container>
        <Text>Idade</Text>
        <StyledInput type={"number"} 
        name={"idade"} 
        required 
        value={form.idade} 
        onChange={onChangeForm}
        size="md"
        w="30rem"
        p="0.5rem"
        pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
        />
        </Container>
        <Container>
        <Text>CPF</Text>
        <StyledInput type={"text"} 
        name={"cpf"} 
        required 
        value={form.cpf} 
        onChange={onChangeForm} 
        placeholder="XXX.XXX.XXX-XX"
        size="md"
        w="30rem"
        p="0.5rem"/>
        </Container>
        <Container>
        <Text>Telefone</Text>
        <StyledInput
        type={"tel"} 
        name={"tel"} 
        required 
        value={form.tel} 
        onChange={onChangeForm} 
        placeholder="(XX) XXXXX-XXXX"
        size="md"
        w="30rem"
        p="0.5rem"/>
        </Container>
        <Container>
        <Text>Email</Text>
        <StyledInput type="email"
          placeholder="Email"
          size="md"
          w="30rem"
          p="0.5rem"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          name="email"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          autoFocus
          autoComplete="email"
          value={form.email} 
          onChange={onChangeForm}/>
        </Container>
        <Container>
        <Text>Senha</Text>
        <StyledInput type="password"
          placeholder="Senha"
          size="sm"
          w="30rem"
          p="0.5rem"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          value={form.password}
          name="password" 
          onChange={onChangeForm}
          required
          autoComplete="password"
          pattern="^.{6,}"
          title="Senha deve possuir ao menos 6 caracteres"/>
        </Container>
        <Flex justify="center" align="center" m={"1rem"}>
        <Button type={"submit"} variant="contained" onClick={()=>goToLoginPage(navigate)}>Cadastrar</Button>
        </Flex>
      </form>
    </Contained>
  )
}
