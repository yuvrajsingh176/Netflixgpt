import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import {API_OPTIONS} from '../utils/constants'
const useNowplayingMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(url, API_OPTIONS);
        const josn = await data.json();
        dispatch(addNowPlayingMovies(josn.results))
    }
    useEffect(() => {
      getNowPlayingMovies() 
   },[])
}
export default useNowplayingMovies;