import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { Restaurant } from "../../../components/Restaurant";
import { Container } from "./styled";

import restaurantList from "../../Restaurant/restaurantList";
import { Select } from "@chakra-ui/react";

export const HomePage = () => {
  const [searchBar, setSearchBar] = useState("");
  const [category,setCategory]=useState("");
  const handleSearch = ({ target }) => {
    setSearchBar(target.value);
  };
  const restaurantsList = restaurantList?.map((restaurant) => {
    return (
      <Restaurant
        restaurant={restaurant}
        key={restaurant.id}
      />
    );
  });
  const filterBySearch = () => {
    const searchedRestaurants = restaurantsList.filter(({props}) => {
      return props.restaurant.name
        ?.toLowerCase()
        .includes(searchBar.toLowerCase());
    });

    if (searchedRestaurants.length) {
      return searchedRestaurants;
    } else {
      return <span> Não encontramos 🙁 </span>;
    }
  };
  const categories=restaurantList.map((restaurant)=>{
    return (<option value={restaurant.category}>{restaurant.category}</option>)
  })
 

  const handleCategory=({target})=>{
    setCategory(target.value)
  }
  const filterByCategory=()=>{
    const categoryRestaurants=restaurantsList.filter(({props})=>{
      return props.restaurant.category
      .includes(category)
    })
    return categoryRestaurants
  }
  return (
    <Container>
      <Header searchBar={searchBar} handleSearch={handleSearch} />
      <Select
        type="text"
        size="md"
        mt="3rem"
        w="20rem"
        placeholder="Categoria"
        onChange={handleCategory}>
       {categories}
      </Select>
      {category !== "" ? filterByCategory() : searchBar !== "" ? filterBySearch() : restaurantsList}
    </Container>
  );
};
