import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAttendantDetailsPage } from "../../routes/coordinator";
import { Container, ContainerDetails, ShippingText } from "./styled";

export const Attendant = ({ attendant }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={()=>goToAttendantDetailsPage(navigate,attendant.id)}>
      <img src={attendant.profileImg} alt="Atendente" />
      <span>{attendant.name}</span>
      <ContainerDetails>
        <span>{attendant.age} anos</span>
        <ShippingText>{attendant.status}</ShippingText>
      </ContainerDetails>
    </Container>
  );
};
export default Attendant
