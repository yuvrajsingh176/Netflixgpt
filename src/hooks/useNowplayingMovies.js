import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import {API_OPTIONS} from '../utils/constants'
const useNowplayingMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const dispatch = useDispatch();
   const nowplaying=useSelector(store=>store.movies.nowPlayingMovies)
   
    const getNowPlayingMovies = async () => {
        const data = await fetch(url, API_OPTIONS);
        const josn = await data.json();
        dispatch(addNowPlayingMovies(josn.results))
    }
    useEffect(() => {
    !nowplaying &&  getNowPlayingMovies() 
   },[])
}
export default useNowplayingMovies;