import React from "react";
import { Header } from "../../components/Header";
import {
  AddressDiv,
  AddressTitle,
  Container,
  CPF,
  DatesDiv,
  Email,
  HistoryDiv,
  HistoryTitle,
  Path,
  ProfileDetails,
  UserImg,
  UserName
} from "./styled";
import Edit from "../../assets/edit.png";
import User from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { goToEditProfilePage } from "../../routes/coordinator";
export const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Header />

        <ProfileDetails>
          <UserImg src={User} />
          <DatesDiv>
            <UserName>Vinicius</UserName>
            <img src={Edit} onClick={() => goToEditProfilePage(navigate)} />
          </DatesDiv>
          <Email>lorem@ipsum.com</Email>
          <br />
          <CPF>XXX.XXX.XXX-XX</CPF>
          <AddressDiv>
            <div>
              <AddressTitle>Endereço Cadastrado</AddressTitle>
              <img src={Edit} onClick={() => goToEditProfilePage(navigate)} />
            </div>
            <p>Rua Qualquer</p>
          </AddressDiv>

          <div>
            <HistoryTitle>Histórico de Pedidos</HistoryTitle>
            <Path></Path>
            <HistoryDiv>
              {/*   <History>
                 Você não realizou nenhum pedido
              </History>
*/}
            </HistoryDiv>
          </div>
        </ProfileDetails>
      </Container>
    </div>
  );
};
