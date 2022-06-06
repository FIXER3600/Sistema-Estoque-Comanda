import React, { useContext, useEffect, useState } from "react";
import { GlobalStorage } from "../../GlobalContext";
import {
  ContainerDetails,
  ContainerProduct,
  QuantityContainer,
} from "./styled";

export const ProductCard = ({ product , openModal}) => {
  /* const { cart, setCart } = useContext(GlobalStorage)
  const [onCart, setOnCart] = useState(0)

  const removeFromCart = (product) => {
    setCart(
      cart.filter((prod) => {
        return product.id !== prod.id
      })
    )
    localStorage.setItem("cart", JSON.stringify(cart))
    setOnCart(0)
  }

  useEffect(() => {
    
    cart.map((prod) => {
      if (prod.id === product.id) return setOnCart(prod.quantity)
      else return false
    })
  }, [cart, product.id])*/
console.log(product);

  return (
    
    <ContainerProduct >
      <img src={product[0]?.img} alt="Imagem do produto" />
      <ContainerDetails>
        <h3>{product[0]?.name}</h3>
        <p>{product[0]?.description}</p>
        <span>R$ {Number(product[0]?.price).toFixed(2)}</span>
        
        <button onClick={() => openModal()}>remover</button>
     
      </ContainerDetails>
    </ContainerProduct>
  );
};

export default ProductCard