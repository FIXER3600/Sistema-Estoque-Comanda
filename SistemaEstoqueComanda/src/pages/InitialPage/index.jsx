import { Flex } from '@chakra-ui/react'
import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export const InitialPage = () => {
  const navigate=useNavigate()
  setTimeout(() => {
    navigate('/login')
  }, 2000)
  return (
    <Flex
    justify="center"
    direction="column"
    align="center"
    minH="100vh">
      <Typography variant="h4">
          BEM-VINDO
        </Typography>
      </Flex>
  )
}
