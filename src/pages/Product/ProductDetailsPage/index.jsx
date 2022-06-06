import React from 'react'
import { HeaderRestaurant } from '../../../components/Header/HeaderRestaurant'
import { ProductCardDetails } from '../../../components/ProductCardDetails'
import { StyledButton } from './styled'

export const ProductDetailsPage = () => {
  return (
    <div>
	    <HeaderRestaurant/>
	    <ProductCardDetails/>
	  
	    <StyledButton
              textPrimary={"secondary"}
              color={"primary"}
              fullWidth
              variant="contained"
              type="submit"
              margin={"normal"}
            >
              Deletar
            </StyledButton>
    </div>
  )
}
