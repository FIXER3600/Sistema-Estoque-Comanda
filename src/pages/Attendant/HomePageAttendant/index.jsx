import React from 'react'
import { HeaderAttendant } from '../../../components/Header/HeaderAttendant'
import Order from "../../../components/Order"
import { Container } from './styled'

export const HomePageAttendant = () => {
  return (
    <Container>
     <HeaderAttendant/>
      <Order/>
      <Order/>
      <Order/>
     </Container>
  )
}
