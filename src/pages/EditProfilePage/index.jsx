import React from 'react'
import { Header } from '../../components/Header'
import { AddressDiv, AddressTitle, Container, CPF, DatesDiv, DivCPF, DivEmail, DivTel, Email, HistoryDiv, HistoryTitle, Path, ProfileDetails, Tel, UserImg, UserName } from './styled'
import User from "../../assets/profile.png"
import { Button } from '@mui/material'
export const EditProfilePage = () => {
  return (
    <div>
      <Header/>
      <Container>
      <Header />
   
        <ProfileDetails>
        <UserImg src={User}/>
          <DatesDiv>
          
            <UserName>Vinicius</UserName>
       
          </DatesDiv>
          <DivEmail>
          <p>Email*</p>
          <Email>lorem@ipsum.com</Email>
          </DivEmail>
          <DivCPF>
          <p>CPF*</p>
          <CPF>XXX.XXX.XXX-XX</CPF>
          </DivCPF>     
          <DivTel>
    <p>Telefone*</p>
          <Tel>(XX) XXXXX-XXXX</Tel>
    </DivTel>
          <AddressDiv>
            <div>
            <AddressTitle>Endereço Cadastrado</AddressTitle>
          
            </div>
            <p>Rua Qualquer</p>
          </AddressDiv>
    
          <div>
            <HistoryTitle>Histórico de Pedidos</HistoryTitle>
            <Path></Path>
            <HistoryDiv>
         {  /*   <History>
                 Você não realizou nenhum pedido
              </History>
*/}
          </HistoryDiv>
        
          </div>
          <Button
           type={"submit"}
           variant="contained">Salvar</Button>
        </ProfileDetails>
    
    </Container>
    </div>
  )
}
