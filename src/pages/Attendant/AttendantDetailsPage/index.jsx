import React from "react";
import { AttendantCardDetails } from "../../../components/AttendantCardDetails";
import { HeaderRestaurant } from "../../../components/Header/HeaderRestaurant";

import { ContainerRestaurantsDetails } from "./styled";

export const AttendantDetailsPage = ({}) => {
  return (
    <div>
      <HeaderRestaurant />

      <ContainerRestaurantsDetails>
        <AttendantCardDetails />
      </ContainerRestaurantsDetails>
    </div>
  );
};
