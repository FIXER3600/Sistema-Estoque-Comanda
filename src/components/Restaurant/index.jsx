import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurantDetailsPage } from "../../routes/coordinator";
import { Container, ContainerDetails, ShippingText } from "./styled";

export const Restaurant = ({ restaurantImg, name, category, address }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => goToRestaurantDetailsPage(navigate)}>
      <img src={restaurantImg} alt="Logo Restaurante" />
      <span>{name}</span>
      <ContainerDetails>
        <span>{category}</span>
        <ShippingText>{address}</ShippingText>
      </ContainerDetails>
    </Container>
  );
};
