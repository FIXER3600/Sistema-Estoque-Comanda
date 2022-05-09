import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ContainerHeader } from './styled';
export const Header = () => {
  const page = () => {
    if (window.location.pathname === "/") {
      return ""
    } else if (window.location.pathname === "/login") {
      return ""
    } else if (window.location.pathname === "/home") {
      return ""
    }
    if (window.location.pathname.includes("/sigin")) {
      return ""
    } else if (window.location.pathname === "/profile") {
      return "Meu Perfil"
    } else if (window.location.pathname === "/profile/edit") {
      return "Editar"
    } else if (window.location.pathname === "/command") {
      return "Comandas"
    } else if (window.location.pathname === "/finishrequest") {
      return "Finalizar Pedido"
    }else if(window.location.pathname === "/request"){
      return "Pedidos"
    }
  }

  return (
    <ContainerHeader>
      {window.location.pathname === "/home" ? (<TextField
  label="Busque o restaurante"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon/>
        </IconButton>
      </InputAdornment>
    )
  }}
/>):(<p>{page()}</p>)}
      
      
      </ContainerHeader>
  )
}
