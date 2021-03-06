import React from "react";
import { useParams } from "react-router-dom";
import restaurants from "../../pages/Restaurant/restaurantList";
import {
	Address,
  Category,
  Container,
  ContainerDetails,
  ContainerNumb,
  Img,
  Name
} from "./styled";

export const RestaurantCardDetails = () => {
  const param=useParams()
	const findRestaurant=()=>{
	  return restaurants.find((restaurant)=>restaurant.id==param.id)
	}
 
  return (
    <div>
      {" "}
      <ContainerDetails>
        <Img src={findRestaurant().logoUrl} alt="Logo Restaurante" />
        <Container>
          <Name>{findRestaurant().name}</Name>
          <Category>{findRestaurant().category}</Category>
          <ContainerNumb>
       
              <p>
              {findRestaurant().description}
	      </p>
          </ContainerNumb>
          <Address>{findRestaurant().address}</Address>
        </Container>
      </ContainerDetails>
    </div>
  );
};