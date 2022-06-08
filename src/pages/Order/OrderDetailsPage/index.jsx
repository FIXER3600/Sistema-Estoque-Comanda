import React from "react";
import { HeaderAttendant } from "../../../components/Header/HeaderAttendant";
import { OrderCardDetails } from "../../../components/Order/OrderCardDetails";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../Product/productList";
import { orderList } from "../orderList";
import { StyledButton } from "./styled";

export const OrderDetailsPage = () => {
  
  const product=products.map((product)=>{
    return (<ProductCard product={product}/>)})
  return (
    <div>
      <HeaderAttendant />

      <OrderCardDetails />
    {product}
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
    </div>
  );
};
