import { Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { HeaderAttendant } from '../../components/Header/HeaderAttendant'
import { Table } from '../../components/Table'
import { Container, Legend } from './style'
import { tables } from './tables'

export const TablesPage = () => {
	const mesas=tables.map((table)=>{
		return (<Table table={table}/>)
	})
  return (
	<Container>
	  <HeaderAttendant/>
	  
    <Grid   templateRows='repeat(2, 1fr)'
    templateColumns='repeat(3,1fr)'
    gap={30}>
	    {mesas}
	    </Grid>
	    <Legend>
		<Text>🟥 Mesa Ocupada</Text>
		<Text>🟩 Mesa Livre</Text>
	    </Legend>
	    </Container>
  )
}
