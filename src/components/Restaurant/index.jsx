import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurantDetailsPage } from "../../routes/coordinator";
import { Container, ContainerDetails, ShippingText } from "./styled";

export const Restaurant = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => goToRestaurantDetailsPage(navigate,restaurant.id)}>
      <img src={restaurant.logoUrl} alt="Logo Restaurante" />
      <span>{restaurant.name}</span>
      <ContainerDetails>
        <span>{restaurant.category}</span>
        <ShippingText>{restaurant.address}</ShippingText>
      </ContainerDetails>
    </Container>
  );
};
