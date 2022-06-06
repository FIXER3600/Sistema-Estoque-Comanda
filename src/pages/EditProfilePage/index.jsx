import React from "react";
import { Header } from "../../components/Header";
import {
  AddressDiv,
  AddressTitle,
  Container,
  DatesDiv,
  DivCPF,
  DivEmail,
  DivTel,
  ProfileDetails,
  UserImg,
  UserName,
} from "./styled";
import User from "../../assets/profile.png";
import { Flex } from "@chakra-ui/react";
import { Button } from "@mui/material";
export const EditProfilePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Header />

        <ProfileDetails>
          <UserImg src={User} />
          <DatesDiv>
            <UserName>Vinicius</UserName>
          </DatesDiv>
          <DivEmail>
            <p>Email*</p>
            <input type={"text"} />
          </DivEmail>
          <DivCPF>
            <p>CPF*</p>
            <input type={"text"} />
          </DivCPF>
          <DivTel>
            <p>Telefone*</p>
            <input type={"text"} />
          </DivTel>
          <AddressDiv>
            <div>
              <AddressTitle>Novo Endereço</AddressTitle>
            </div>
            <input type={"text"} />
          </AddressDiv>
<Flex justify="center" align="center" m={"1rem"}>
          <Button type={"submit"} variant="contained">
            Salvar
          </Button>
          </Flex>
        </ProfileDetails>
      </Container>
    </div>
  );
};
