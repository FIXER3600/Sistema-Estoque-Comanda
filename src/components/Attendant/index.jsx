import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAttendantDetailsPage } from "../../routes/coordinator";
import { Container, ContainerDetails, ShippingText } from "./styled";

export const Attendant = ({ profileImg, name, age, gender }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => goToAttendantDetailsPage(navigate)}>
      <img src={profileImg} alt="Atendente" />
      <span>{name}</span>
      <ContainerDetails>
        <span>{age} anos</span>
        <ShippingText>Sexo: {gender}</ShippingText>
      </ContainerDetails>
    </Container>
  );
};
