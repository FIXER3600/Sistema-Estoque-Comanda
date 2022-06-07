import React, { createContext, useEffect, useState } from "react"
import { orderList } from "../pages/Order/orderList";


export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  const [order,setOrder]=useState(orderList)
  return (
    <GlobalContext.Provider
    value={{
      cart,
      setCart,
      order,
      setOrder
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
