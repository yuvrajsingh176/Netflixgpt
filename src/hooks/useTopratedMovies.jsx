import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTopratedMovies, } from "../utils/movieSlice";

const useTopratedMovies = () => {
    const URL = "https://api.themoviedb.org/3/movie/top_rated";
    const dispatch = useDispatch();
    const fetchPopularMovies =async () => {
        const data =await fetch(URL, API_OPTIONS);
        const json =await data.json();
dispatch(addTopratedMovies(json.results))
    }
    useEffect(() => {
        fetchPopularMovies();
    },[])

}
export default useTopratedMovies;