import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { created } from "../../../app/orders/orderSlice";
import { HeaderAttendant } from "../../../components/Header/HeaderAttendant";
import Order from "../../../components/Order";

import { Container } from "./styled";

export const HomePageAttendant = () => {
  const [sortingParameter, setSortingParameter] = useState("");
  const [searchBar,setSearchBar]=useState("")
  const handleSearch = ({ target }) => {
    setSearchBar(target.value);
  };
  const updateSortingParameter = ({ target }) => {
    setSortingParameter(target.value);
  };
  const orders = useSelector((state) => state.order);
 const orderList= orders.map((order) => (
    <Order order={order} />
  )).sort((currentOrder, nextOrder) => {
    switch (sortingParameter) {
      case "Mais Recentes":
        console.log(nextOrder.props);
        return currentOrder.props.order.duration - nextOrder.props.order.duration;
      case "Mais Antigos":
        return nextOrder.props.order.duration - currentOrder.props.order.duration;
      }
    })
    const filterByName=()=>{
    const orderByName=orderList.filter(({props})=>{
  
      return props.order.name?.toLowerCase()
      .includes(searchBar.toLowerCase());
    })
    return orderByName
    }
  return (
    <Container>
      <HeaderAttendant searchBar={searchBar} handleSearch={handleSearch}/>
      <Select
      type="text"
      size="md"
      mt="4rem"
      w="20rem"
      placeholder="Ordenar por"
      onChange={updateSortingParameter}
      >
        <option value={"Mais Recentes"}>Mais Recentes</option>
        <option value={"Mais Antigos"}>Mais Antigos</option>
        </Select>
      {searchBar!==""? filterByName(): orderList}
     
    </Container>
  );
};
