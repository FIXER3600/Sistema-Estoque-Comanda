import React from "react";
import { Header } from "../../../components/Header";

import {
  CartDetails,
  Container,
  Input,
  Path,
  Price,
  RestaurantDetails,
  StyledButton,
  SubTotal,
  Total,
  TotalPrice,
} from "./styled";

import ProductCard from "../../../components/ProductCard";
import { products } from "../../Product/productList";
export const CartPage = () => {
  const productsCart = products?.map((product) => {
   
  return (  <ProductCard product={product} key={product.id} />)
  });

  return (
    <div>
      <Header />
      <Container>
        <RestaurantDetails>
          <h3>Habibs</h3>
          <p>Rua das Margaridas, 110</p>
        </RestaurantDetails>
        <CartDetails>
          {productsCart}
          <Price>
            <TotalPrice>
              <SubTotal>TOTAL</SubTotal>
              <Total> R$ 10.16</Total>
            </TotalPrice>
          </Price>
          <p>Forma de Pagamento</p>
          <Path></Path>
          <form>
            <Input
              type="radio"
              value={"money"}
              required
              id="money"
              name="paymentMethod"
            />
            <label htmlFor="dinheiro">Dinheiro</label>
            <br />
            <br />
            <Input
              type="radio"
              value={"creditcard"}
              required
              id="credit"
              name="paymentMethod"
            />
          
            <label htmlFor="credito">Cartão de Crédito</label>
            <br />
            <br />
            <Input
              type="radio"
              value={"pix"}
              required
              id="pix"
              name="paymentMethod"
            />
            <label htmlFor="pix">Pix</label>
            <StyledButton
              textPrimary={"secondary"}
              color={"primary"}
              fullWidth
              variant="contained"
              type="submit"
              margin={"normal"}
            >
              Confirmar
            </StyledButton>
          </form>
        </CartDetails>
      </Container>
    </div>
  );
};
