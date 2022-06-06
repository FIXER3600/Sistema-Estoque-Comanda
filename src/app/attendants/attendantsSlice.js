import { createSlice } from "@reduxjs/toolkit";
import attendantList from "../../pages/Attendant/attendantList";

export const attendantSlice = createSlice({
  name: "attendant",
  initialState: attendantList,

  reducers: {
    created: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const {created}=orderSlice.actions
export default orderSlice.reducer