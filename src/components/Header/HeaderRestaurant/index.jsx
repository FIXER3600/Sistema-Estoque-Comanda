import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContainerHeader, StyledTextField } from "./styled";
import "./menu.css";
export const HeaderRestaurant = ({ searchBar, handleSearch }) => {
  const page = () => {
    if (window.location.pathname === "/" || "/login" || "/home" || "/sigin") {
      return "";
    } else if (window.location.pathname === "/profile") {
      return "Meu Perfil";
    } else if (window.location.pathname === "/profile/edit") {
      return "Editar";
    }
  };

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
              <a className="nav-item" href="/homeRestaurant">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="/product">
               Produtos
              </a>
            </li>

            <li>
              <a className="nav-item" href="/profile">
                Perfil
              </a>
            </li>
          </ul>
        </nav>

        {window.location.pathname === "/homeRestaurant" ? (
          <TextField
            label="Busque o atendente"
            value={searchBar}
            onChange={handleSearch}
            type="search"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ) : window.location.pathname==="/product"?(
          <StyledTextField
     
          label="Busque o produto"
          value={searchBar}
          onChange={handleSearch}
          type="search"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        ): (
          <p>{page()}</p>
        )}
      </header>
    </ContainerHeader>
  );
};
