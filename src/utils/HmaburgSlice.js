import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

const HamburgSlice = createSlice({
  name: "toggle",
  initialState: {
    isMenuOpen : true,
  },
  reducers: {
    togglebtn : (state) => {
        state.isMenuOpen =!state.isMenuOpen;
    },
    fixedbtn : (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { togglebtn, fixedbtn } = HamburgSlice.actions;
export default HamburgSlice.reducer;
