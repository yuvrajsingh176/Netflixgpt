import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "details",
    initialState: {
        id: null,
        movieDetails: null,
        movieInfo: null,
        actors:null
    },
    reducers: {
        movieId: (state, action) => {
            state.id = action.payload;
        },
        createMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        createMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        },
        casts: (state, action) => {
            state.actors=action.payload
        }
    }
})

export const { movieId,createMovieDetails,createMovieInfo,casts } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;