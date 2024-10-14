
import { configureStore } from "@reduxjs/toolkit"
import HmaburgSlice from "./HmaburgSlice";
import HomeVideoSlice from "./HomeVideoSlice.js";
import chatSlice from "./chatSlice.js";

const appStore = configureStore({ 
    reducer: {
        app:HmaburgSlice,
        videos: HomeVideoSlice,
        liveChat:chatSlice,
        
    }
 });
 export default appStore;
