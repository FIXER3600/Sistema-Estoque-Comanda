import React from "react";
import { Header } from "../../components/Header";
import {
  AddressDiv,
  AddressTitle,
  ButtonStyled,
  Container,
  CPF,
  DatesDiv,
  Email,
  HistoryDiv,
  HistoryTitle,
  Path,
  ProfileDetails,
  StyledButton,
  UserImg,
  UserName
} from "./styled";
import Edit from "../../assets/edit.png";
import User from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { goToEditProfilePage } from "../../routes/coordinator";
import { HeaderProfile } from "../../components/HeaderProfile";
export const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <HeaderProfile />

        <ProfileDetails>
          <UserImg src={User} />
          <DatesDiv>
            <UserName>Usuário</UserName>
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
      <ButtonStyled>
        <StyledButton
          textPrimary={"primary"}
          color={"primary"}
          fullWidth
          variant="contained"
          type="submit"
          margin={"normal"}
        >
          Logout
        </StyledButton>
      </ButtonStyled>
    </div>
  );
};
