import { combineSlices } from "@reduxjs/toolkit";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieId } from "../utils/movieDetalsSlice";

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardHandler = (id) => {
    dispatch(movieId(id));
    navigate("/details");
  };
  return (
    <div className="px-6 overflow-hidden">
      <h1 className="text-2xl md:text-4xl py-4 text-white">{title}</h1>

      <div className="flex overflow-auto scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <button
              onClick={() => {
                cardHandler(movie.id);
              }}
            >
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
