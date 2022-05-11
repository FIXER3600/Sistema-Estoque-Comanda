import { IconButton, InputAdornment} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ContainerHeader, StyledInput } from './styled';
import "./menu.css";
import "./script"
export const Header = () => {
  const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
  
 
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
 
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
    } else if (window.location.pathname === "/profile"){
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
        <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
        <span id="hamburger"></span>
        </button>
        <nav id="nav">
          <ul id="menu" role="menu">
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
            <a className="nav-item" href="">Lojas</a>
            </li>
            <li>
            <a className="nav-item" href="/profile">Perfil</a>
            </li>
          </ul>   
     </nav>
    
      {window.location.pathname === "/home" ? (
      <StyledInput
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
