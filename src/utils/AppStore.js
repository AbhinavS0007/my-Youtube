
import { configureStore } from "@reduxjs/toolkit"
import HmaburgSlice from "./HmaburgSlice";
import HomeVideoSlice from "./HomeVideoSlice.js";

const appStore = configureStore({ 
    reducer: {
        app:HmaburgSlice,
        videos: HomeVideoSlice,
    }
 });
 export default appStore;
