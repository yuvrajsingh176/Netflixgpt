import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
    lang:'en'  
    },
    reducers: {
        changeLanuage: ( state,action)=>{
            state.lang = action.payload;
        }
    }

})

export default configSlice.reducer;

export const { changeLanuage } = configSlice.actions;