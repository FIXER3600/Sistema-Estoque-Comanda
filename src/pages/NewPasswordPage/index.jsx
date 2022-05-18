import { Text } from '@chakra-ui/react'
import { Button, Typography } from '@mui/material'
import React from 'react'
import useForm from '../../hooks/useForm'
import { Contained, StyledInput } from './styled'

const NewPasswordPage = () => {
  const { form, onChangeForm, errors, span,setSpan, clearFields } = useForm({
    password: "",
    confirmPassword:""
  })
  return (
    <Contained>
       <Typography variant="h3">
          Redefinir a senha
        </Typography>
      <form>
      <Text>Digite sua nova senha</Text>
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
	  <Text>Confirme sua senha</Text>
	  <StyledInput type="password"
          placeholder="Confirme sua Senha"
          size="sm"
          w="30rem"
          p="0.5rem"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          value={form.cpnfirmPassword}
          name="confirmPassword" 
          onChange={onChangeForm}
          required
          pattern="^.{6,}"
          title="Senha deve possuir ao menos 6 caracteres"/>
        <Button variant="contained" onClick={()=>goToRegisterClient(navigate)}>Enviar</Button>
      </form>
    </Contained>

  )
}

export default NewPasswordPage