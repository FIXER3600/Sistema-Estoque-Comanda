import { Button } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import attendantList from '../../pages/Attendant/attendantList';
import { Address, Container, ContainerDetails, ContainerNumb, Img, Name } from './styled';

export const AttendantCardDetails = () => {
	const param=useParams()
	const findAttendant=()=>{
	  return attendantList.find((attendant)=>attendant.id==param.id)
	}
	
	return (
	  <div>
	    {" "}
	    <ContainerDetails>
	      <Img src={findAttendant().profileImg} alt="Foto do atendente" />
	      <Container>
		<Name>{findAttendant().name}</Name>
		
		<ContainerNumb>
	     
		    <p>
		      {findAttendant().gender}
		    </p>
		    <p>
		    {findAttendant().age} anos
		    </p>
		</ContainerNumb>
		<Address>{findAttendant().cpf}</Address>
		<p>Status atual: {findAttendant().status}</p>
	      <p>Avaliação geral: {findAttendant().rate}</p>
	      </Container>
	      
	    </ContainerDetails>
	    <Button></Button>
	  </div>
	);
      };
