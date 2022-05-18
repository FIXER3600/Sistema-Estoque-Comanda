import { Text } from '@chakra-ui/react'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToVerifyEmailPage } from '../../routes/coordinator'
import { Contained, StyledInput } from './styled'

const ForgotPasswordPage = () => {
  const { form, onChangeForm, errors, span,setSpan, clearFields } = useForm({
    email: ""
  })
  const navigate=useNavigate();
  return (
    <Contained>
       <Typography variant="h3">
          Redefinir a senha
        </Typography>
        <Text>Será enviado um email com instruções para redefinir a senha</Text>
      <form>
      <StyledInput
      type="email"
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
      onChange={onChangeForm}
      />
        <Button variant="contained" onClick={()=>goToVerifyEmailPage(navigate)}>Enviar</Button>
      </form>
    </Contained>

  )
}

export default ForgotPasswordPage