import React from 'react'
import { Container, TableNumber } from './styled'

export const Table = ({table}) => {
  return (
    <Container livre={table.status}>
	    <TableNumber>{table.id}</TableNumber>
	</Container>
  )
}
