import { Text } from '@chakra-ui/react'
import { Typography } from '@mui/material'
import React from 'react'
import { Contained} from './styled'

const VerifyEmailPage = () => {
  return (
    <Contained>
       <Typography variant="h3">
          Redefinir a senha
        </Typography>
        <Text>Por favor, verifique seu email</Text>
    </Contained>

  )
}

export default VerifyEmailPage