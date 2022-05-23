import React from 'react'
import { Header } from '../../components/Header'
import { Order } from '../../components/Order'
import { Container } from './styled'

export const HomePageAttendant = () => {
  return (
    <Container>
      <Header/>
      <Order/>
      <Order/>
      <Order/>
     </Container>
  )
}
