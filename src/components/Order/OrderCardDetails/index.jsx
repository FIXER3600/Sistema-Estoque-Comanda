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
          <Name>Mesa: {findOrder().number}</Name>
          <Category>{findOrder().status}</Category>
          <ContainerNumb>
           
            <p>
              Quantidade: 
              {Number(findOrder().quantity).toFixed(2)}
            </p>
          </ContainerNumb>
          <Address>{findOrder().address}</Address>
        </Container>
      </ContainerDetails>
    </div>
  );
};
