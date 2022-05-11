import React from "react";
import useForm from "../../hooks/useForm";
import {   Flex, Input, Text } from '@chakra-ui/react'
import { Button, Typography } from "@mui/material";
import { Contained, StyledInput } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
export const LoginPage = () => {
  const { form, onChangeForm, errors, span,setSpan, clearFields } = useForm({
    email: "",
    password: ""
  })
  const navigate=useNavigate();
  return (
    <Contained
    justify="center"
    direction="column"
    align="center"
    minH="100vh">
     <Typography variant="h4">
          LOGIN
        </Typography>

      <form>
        <div>
        <Text fontSize="4xl" color="purple.600">
          Email
          </Text>
        <StyledInput type="email"
          placeholder="Email"
          size="sm"
          w="30rem"
          p="0.5rem"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          name="email"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          autoFocus
          required
          autoComplete="email"
          value={form.email} 
          onChange={onChangeForm}/>
          </div>
          <div>
        <Text fontSize="4xl" color="purple.600" >
          Senha
          </Text>
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
          pattern="^.{6,}"
          title="Senha deve possuir ao menos 6 caracteres"/>
          </div>
        <Flex justify="center" align="center" m={"2rem"}>
        <Button variant="contained" onClick={()=>goToHomePage(navigate)}>Entrar</Button>
        </Flex>
      </form>
      <div>
        <p>
          Não possui cadastro? <a href="/sign">Cadastre-se</a>
        </p>
      </div>
    </Contained>
  );
};
