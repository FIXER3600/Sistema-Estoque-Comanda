import { createSlice } from "@reduxjs/toolkit";
import { orderList } from "../../pages/Order/orderList";

export const orderSlice = createSlice({
  name: "order",
  initialState: orderList,

  reducers: {
    created: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const {created}=orderSlice.actions
export default orderSlice.reducer