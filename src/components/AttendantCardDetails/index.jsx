import React from 'react'
import { Address, Category, Container, ContainerDetails, ContainerNumb, Img, Name } from './styled';

export const AttendantCardDetails = ({
	profileImg,
	name,
	role,
	gender,
	age,
	cpf,
      }) => {
	return (
	  <div>
	    {" "}
	    <ContainerDetails>
	      <Img src={profileImg} alt="Foto do atendente" />
	      <Container>
		<Name>{name}</Name>
		<Category>{role}</Category>
		<ContainerNumb>
	     
		    <p>
		      {gender}
		    </p>
		    <p>
		    {age} anos
		    </p>
		</ContainerNumb>
		<Address>{cpf}</Address>
	      </Container>
	    </ContainerDetails>
	  </div>
	);
      };
