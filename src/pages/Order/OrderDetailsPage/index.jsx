import { Flex } from "@chakra-ui/react";
import React from "react";
import { HeaderAttendant } from "../../../components/Header/HeaderAttendant";
import { OrderCardDetails } from "../../../components/Order/OrderCardDetails";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../Product/productList";
import { orderList } from "../orderList";
import { StyledButton, StyledButtonFinalize } from "./styled";

export const OrderDetailsPage = () => {
  
  const product=products.map((product)=>{
    return (<ProductCard product={product}/>)})
  return (
    <div>
      <HeaderAttendant />

      <OrderCardDetails />
    {product}
    <Flex>
       <StyledButtonFinalize
              textPrimary={"secondary"}
              color={"primary"}
              fullWidth
              variant="contained"
              type="submit"
              margin={"normal"}
            >
              Finalizar
            </StyledButtonFinalize>
            <StyledButton
              textPrimary={"secondary"}
              color={"primary"}
              fullWidth
              variant="contained"
              type="submit"
              margin={"normal"}
            >
              Cancelar
            </StyledButton>
            </Flex>
   
    </div>
  );
};
