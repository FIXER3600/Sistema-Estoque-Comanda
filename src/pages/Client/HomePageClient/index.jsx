import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { Restaurant } from "../../../components/Restaurant";
import { Container } from "./styled";

import restaurantList from "../../Restaurant/restaurantList";
export const HomePage = () => {
  const [searchBar, setSearchBar] = useState("");
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
  return (
    <Container>
      <Header searchBar={searchBar} handleSearch={handleSearch} />
      {searchBar !== "" ? filterBySearch() : restaurantsList}
    </Container>
  );
};
