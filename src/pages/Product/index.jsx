import React, { useState } from 'react'
import { HeaderRestaurant } from '../../components/Header/HeaderRestaurant'

import { ProductCardList } from '../../components/ProductCardList'

import { products } from './productList'
import { Container, PlusIcon } from './styled'

import plusIcon from "../../assets/button-icon.jpg";
import { goToRegisterProduct } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { Select } from '@chakra-ui/react'
export const ProductPage = () => {
  const [searchBar, setSearchBar] = useState("");
  const [sortingParameter,setSortingParameter]=useState("")
  const navigate=useNavigate()

  const updateSortingParameter = ({ target }) => {
    setSortingParameter(target.value);
  };
  const handleSearch = ({ target }) => {
    setSearchBar(target.value);
  };
	const productList=products.map((prod)=>{
      return (
        <ProductCardList product={prod}/>
      )
  }
  ).sort((currentOrder, nextOrder) => {
    switch (sortingParameter) {
      case "Maior Estoque":
        console.log(nextOrder.props);
        return nextOrder.props.product.quantity - currentOrder.props.product.quantity;
      case "Menor Estoque":
        return currentOrder.props.product.quantity - nextOrder.props.product.quantity ;
      }
    })
 
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
      <Select
      type="text"
      size="md"
      mt="4rem"
      w="20rem"
      placeholder="Ordenar por"
      onChange={updateSortingParameter}
      >
        <option value={"Maior Estoque"}>Maior Estoque</option>
        <option value={"Menor Estoque"}>Menor Estoque</option>
        </Select>
      {  searchBar !== "" ? filterBySearch() : productList}
      <PlusIcon
        src={plusIcon}
        onClick={() => goToRegisterProduct(navigate)}
      />
    </Container>
  )
}
