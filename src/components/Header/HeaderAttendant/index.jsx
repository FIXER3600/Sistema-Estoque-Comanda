import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContainerHeader } from "./styled";
import "./menu.css";
export const Header = () => {
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
              <a className="nav-item" href="/homeAttendant">
                Home
              </a>
            </li>

            <li>
              <a className="nav-item" href="/profile">
                Perfil
              </a>
            </li>
          </ul>
        </nav>

        {window.location.pathname === "/homeAttendant" ? (
          <TextField
            label="Busque o Pedido"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        ) : (
          <p>{page()}</p>
        )}
      </header>
    </ContainerHeader>
  );
};
