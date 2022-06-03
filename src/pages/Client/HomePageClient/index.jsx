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
  const restaurantsList = restaurantList.map((restaurant) => {
    return (
      <Restaurant
        address={restaurant.address}
        category={restaurant.category}
        name={restaurant.name}
        restaurantImg={restaurant.logoImg}
        key={restaurant.id}
      />
    );
  });
  const filterBySearch = () => {
    const searchedRestaurants = restaurantList.filter(({ props }) => {
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
      {/*<Restaurant
        restaurantImg="https://s3.amazonaws.com/gupy5/production/socialmedias/10499/a47ac69595f7b82d74da0505286e0b68_logo.png"
        name="Habibs"
        category="Árabe"
        address="Avenida Marechal Tito, 4290"
      />
      <Restaurant
        restaurantImg="data:image/png;base64,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"
        name="McDonalds"
        category="Lanchonete"
        address=" R. Estevão Ribeiro Garcia, 30"
      />
      <Restaurant
        restaurantImg="http://gsobmidia.com.br/uploads/lojas/7/bk_1604508400.png"
        name="Burger King"
        category="Lanchonete"
        address="Avenida Marechal Tito, 5915"
    />*/}
      {searchBar !== "" ? filterBySearch() : restaurantsList}
    </Container>
  );
};
