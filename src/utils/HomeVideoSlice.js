import { createSlice } from "@reduxjs/toolkit";

const HomeVideoSlice = createSlice({
  name: "Home Video Slice",
  initialState: {
    HomeVideos: null,
    SearchResultVideos: null,
  },
  reducers: {
    addHomeVideos: (state, action) => {
      state.HomeVideos = action.payload;
    },
    addSearchResultHomeVideos: (state, action) => {
        state.SearchResultVideos = action.payload;
    },
    goHome: (state) => {
      state.SearchResultVideos = null;
    },
  },
});

export const {addHomeVideos, addSearchResultHomeVideos, goHome } = HomeVideoSlice.actions;

export default HomeVideoSlice.reducer;
