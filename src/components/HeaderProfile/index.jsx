import React from 'react'
import "./menu.css";
import { ContainerHeader } from './styled';
export const HeaderProfile = () => {
  return (
	<ContainerHeader>
	<header className="header">
	  <input class="side-menu" type="checkbox" id="side-menu" />
	  <label class="hamb" for="side-menu">
	    <span class="hamb-line"></span>
	  </label>
	  <nav id="nav" className="nav">
	    <ul id="menu" role="menu" className="menu">
	    <li>
              <a className="nav-item" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="/cart">
                Carrinho
              </a>
            </li>
            <li>
              <a className="nav-item" href="/profile">
                Perfil
              </a>
            </li>
	      <li>
		<a className="nav-item" href="/homeAttendant">
		  Home Atendente
		</a>
	      </li>
	      <li>
		<a className="nav-item" href="/tables">
		  Mesas
		</a>
	      </li>
	      <li>
		<a className="nav-item" href="/homeRestaurant">
		  Home Restaurante
		</a>
	      </li>
	      <li>
		<a className="nav-item" href="/product">
		  Produtos
		</a>
	      </li>
	    </ul>
	  </nav>
	</header>
      </ContainerHeader>
  )
}
