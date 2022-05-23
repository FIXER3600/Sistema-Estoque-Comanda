import React from 'react'
import { Header } from '../../components/Header'
import { Restaurant } from '../../components/Restaurant'
import { Container } from './styled'

export const HomePage = () => {
  return (
    <Container>
      <Header/>
      <Restaurant/>
      <Restaurant/>
      <Restaurant/>
     </Container>
  )
}
