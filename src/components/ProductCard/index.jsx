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
      <img src={product.img} alt="Imagem do produto" />
      <ContainerDetails>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>Quantidade: {product.quantity}</span>
        
        <button onClick={() => openModal()}>
          {window.location.pathname === "/cart"? "Remover":"Adicionar"}
          
          
          </button>
     
      </ContainerDetails>
    </ContainerProduct>
  );
};

export default ProductCard