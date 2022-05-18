import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ContainerHeader } from './styled';
import "./menu.css"
export const Header = () => {

 
  const page = () => {
    if (window.location.pathname === "/" || "/login" || "/home" || "/sigin") {
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
      <header className="header">
<input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav id="nav" className="nav">
          <ul id="menu" role="menu" className="menu">
          <li>
            <a className="nav-item" href="/home">Home</a>
            </li>
            <li>
            <a className="nav-item" href="/request">Pedidos</a>
            </li>
            <li>
            <a className="nav-item" href="/command">Comandas</a>
            </li>
            <li>
            <a className="nav-item" href="/profile">Perfil</a>
            </li>
          </ul>   
     </nav>

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
      
</header>
      </ContainerHeader>
  )
}
