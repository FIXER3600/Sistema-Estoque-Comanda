import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { RestaurantCardDetails } from "../../../components/RestaurantCardDetails";
import restaurants from "../restaurantList";
import { ContainerModal, ModalSelect, StyledButton } from "./styled";

export const RestaurantDetailsPage = () => {
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const handleChange = (event) => {
    setQuantity(event.target.value)
  }
   const openModal = () => {
        setOpen(true)
      }
      const closeModal=()=>{
        setOpen(!open);
      }
  const productList=restaurants.map((restaurant)=>{
    return restaurant.products
  }).map((product)=>{
   
    return (<ProductCard
        product={product}
      openModal={openModal}
        key={product.id}
        />
  )})
 
  

  return (
  
    <div>
      <RestaurantCardDetails />
    {productList}
    <ContainerModal open={open} onClick={(e) => (e.target === e.currentTarget ? closeModal() : null)}>
       <ModalSelect >
         <p>Selecione a quantidade desejada</p>
         <FormControl fullWidth>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"   
             value={quantity}
             onChange={handleChange}
           >
             <MenuItem value={0} disabled>
               0
             </MenuItem>
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
             <MenuItem value={4}>4</MenuItem>
             <MenuItem value={5}>5</MenuItem>
             <MenuItem value={6}>6</MenuItem>
             <MenuItem value={7}>7</MenuItem>
             <MenuItem value={8}>8</MenuItem>
             <MenuItem value={9}>9</MenuItem>
             <MenuItem value={10}>10</MenuItem>
           </Select>
         </FormControl>
         <StyledButton
           variant="text"
           color="primary"
           onClick={()=>closeModal()}
         >
           ADICIONAR AO CARRINHO
         </StyledButton>
       </ModalSelect>
     </ContainerModal>
    </div>
  );
};
