import React, { useState } from "react";
import { Header } from "../../components/Header";
import {
  AddressDiv,
  AddressTitle,
  Container,
  DatesDiv,
  DivCPF,
  DivEmail,
  DivTel,
  Input,
  ProfileDetails,
  UserImg,
  UserName,
} from "./styled";
import User from "../../assets/profile.png";
import { Flex } from "@chakra-ui/react";
import { Button } from "@mui/material";
import Edit from "../../assets/edit.png"
import { HeaderProfile } from "../../components/HeaderProfile";
export const EditProfilePage = () => {
  const [userImg,setUserImg]=useState(User);


  const onChange = (e) => {
    e.preventDefault()
    const [file] = e.target.files;
    setUserImg(URL.createObjectURL(file));
  }

  return (
    <div>
      <HeaderProfile/>
      <Container>
        <Header />

        <ProfileDetails>
          <UserImg src={userImg} />
         <label htmlFor='file'> <img src={Edit} /></label>
    <Input type="file" id="file" name="file" onChange={onChange}/>

          <DatesDiv>
            <UserName>Usuário*</UserName>
            <input type={"text"} />
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
