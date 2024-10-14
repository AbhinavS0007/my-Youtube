import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages:(state,action) => {
            state.messages.splice(5,1)
            state.messages.push(action.payload);
        }
    },
    
})

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;   