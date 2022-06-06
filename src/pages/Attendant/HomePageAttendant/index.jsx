import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { created } from "../../../app/orders/orderSlice";
import { HeaderAttendant } from "../../../components/Header/HeaderAttendant";
import Order from "../../../components/Order";

import { Container } from "./styled";

export const HomePageAttendant = () => {
  const dispatch = useDispatch();
  //const {order,setOrder}=useContext(GlobalStorage)
  const orders = useSelector((state) => state.order);
  return (
    <Container>
      <HeaderAttendant />
      {orders.map((order) => (
        <Order order={order} />
      ))}
      <button
        onClick={() =>
          dispatch(
            created({
              id: orders.length+1,
              img: "https://img.itdg.com.br/tdg/images/recipes/000/194/267/288427/288427_original.jpg?mode=crop&width=710&height=400",
              number: 1,
              status: "Ativado",
              quantity: 10,
            })
          )
        }
      >
        Adicionar
      </button>
    </Container>
  );
};
