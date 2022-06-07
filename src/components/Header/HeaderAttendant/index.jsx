import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContainerHeader } from "./styled";
import "./menu.css";
export const HeaderAttendant = ({searchBar,handleSearch}) => {
  const page = () => {
  
     if (window.location.pathname=="/tables") {
      return "Mesas";
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
              <a className="nav-item" href="/tables">
                Mesas
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
            value={searchBar}
            onChange={handleSearch}
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
