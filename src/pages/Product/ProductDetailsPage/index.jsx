import { Flex } from '@chakra-ui/react'
import React from 'react'
import { HeaderRestaurant } from '../../../components/Header/HeaderRestaurant'
import { ProductCardDetails } from '../../../components/ProductCardDetails'
import { StyledButton } from './styled'

export const ProductDetailsPage = () => {
  return (
    <div>
	    <HeaderRestaurant/>
      <Flex pt={"1.5rem"} ml={"0.5rem"}>
	    <ProductCardDetails/>
      </Flex>
	  <Flex alignItems={'flex-end'} justifyContent="flex-end" p={"1rem 1rem"} pt={"16rem"}>
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
            </Flex>
    </div>
  )
}
