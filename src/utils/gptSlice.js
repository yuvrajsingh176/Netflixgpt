import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptsearch: false,
        gptmovies: null,
        gptmovienames:null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptsearch=!state.showGptsearch
        },
        addGptmovies: (state, action) => {
            state.gptmovies = action.payload;
        },
        addmoviesNames: (state, action) => {
            state.gptmovienames=action.payload
        }
    }
})
export default gptSlice.reducer;
export const { toggleGptSearchView,addGptmovies,addmoviesNames } = gptSlice.actions;