import React, { useState } from 'react'
import { HeaderRestaurant } from '../../components/Header/HeaderRestaurant'

import { ProductCardList } from '../../components/ProductCardList'

import { products } from './productList'
import { Container, PlusIcon } from './styled'

import plusIcon from "../../assets/button-icon.jpg";
import { goToRegisterProduct } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
export const ProductPage = () => {
	const productList=products.map((prod)=>{
      return (
        <ProductCardList product={prod}/>
      )
  }
  )
  const [searchBar, setSearchBar] = useState("");

  const navigate=useNavigate()

  const handleSearch = ({ target }) => {
    setSearchBar(target.value);
  };
	const filterBySearch = () => {
    const searchedProducts = productList.filter(({props}) => {
      return props.product.name
        ?.toLowerCase()
        .includes(searchBar.toLowerCase());
    })

    if (searchedProducts.length) {
      return searchedProducts;
    } else {
      return <p> Não encontramos 🙁 </p>;
    }
  };
  return (
    <Container>
       
      <HeaderRestaurant searchBar={searchBar} handleSearch={handleSearch}/>
     
      {searchBar !== "" ? filterBySearch() :productList}
      <PlusIcon
        src={plusIcon}
        onClick={() => goToRegisterProduct(navigate)}
      />
    </Container>
  )
}
