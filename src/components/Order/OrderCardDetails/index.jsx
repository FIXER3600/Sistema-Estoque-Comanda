import { Img } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { orderList } from "../../../pages/Order/orderList";
import {
  Address,
  Category,
  Container,
  ContainerDetails,
  ContainerNumb,
  Name
} from "./styled";

export const OrderCardDetails = () => {
  const param=useParams()
	const findOrder=()=>{
	  return orderList.find((order)=>order.id==param.id)
	}
  console.log(findOrder());
  return (
    <div>
      {" "}
      <ContainerDetails>
        <Img src={findOrder().img} alt="Imagem do Pedido" />
        <Container>
          <Name>{findOrder().name}</Name>
          <Category>{findOrder().category}</Category>
          <ContainerNumb>
            <p>
              {Math.floor(findOrder().deliveryTime * 0.9)} - {findOrder().deliveryTime} min
            </p>
            <p>
              Frete R$
              {Number(findOrder().shipping).toFixed(2)}
            </p>
          </ContainerNumb>
          <Address>{findOrder().address}</Address>
        </Container>
      </ContainerDetails>
    </div>
  );
};
