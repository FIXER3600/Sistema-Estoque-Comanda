import React from "react";
import { HeaderAttendant } from "../../../components/Header/HeaderAttendant";
import { OrderCardDetails } from "../../../components/Order/OrderCardDetails";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../Product/productList";
import { orderList } from "../orderList";

export const OrderDetailsPage = () => {
  
  const product=products.map((product)=>{
    return (<ProductCard product={product}/>)})
  return (
    <div>
      <HeaderAttendant />

      <OrderCardDetails />
    {product}
    </div>
  );
};
