import { Img } from "@chakra-ui/react";
import React from "react";
import {
  Address,
  Category,
  Container,
  ContainerDetails,
  ContainerNumb,
  Name
} from "./styled";

export const OrderCardDetails = ({
  logoUrl,
  name,
  category,
  deliveryTime,
  shipping,
  address
}) => {
  return (
    <div>
      {" "}
      <ContainerDetails>
        <Img src={logoUrl} alt="Imagem do Pedido" />
        <Container>
          <Name>{name}</Name>
          <Category>{category}</Category>
          <ContainerNumb>
            <p>
              {Math.floor(deliveryTime * 0.9)} - {deliveryTime} min
            </p>
            <p>
              Frete R$
              {Number(shipping).toFixed(2)}
            </p>
          </ContainerNumb>
          <Address>{address}</Address>
        </Container>
      </ContainerDetails>
    </div>
  );
};
