
import { configureStore } from "@reduxjs/toolkit"
import HmaburgSlice from "./HmaburgSlice";

const appStore = configureStore({ 
    reducer: {
        app:HmaburgSlice,
    }
 });
 export default appStore;
