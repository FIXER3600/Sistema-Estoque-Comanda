import { configureStore } from '@reduxjs/toolkit'
import  order  from './orders/orderSlice'
const store=configureStore({
  reducer: {order}
})

export default store
