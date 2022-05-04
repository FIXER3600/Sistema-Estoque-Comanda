import React, { createContext, useEffect, useState } from "react"
import { httpClient, url } from "../constants"
import useLocalStorage from "../hooks/useLocalStorage"

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
 
  return (
    <GlobalContext.Provider
    >
      {children}
    </GlobalContext.Provider>
  );
}
