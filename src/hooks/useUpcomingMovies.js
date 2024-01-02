import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from '../utils/constants'
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming';
    const dispatch = useDispatch();
   const upcomingMovies=useSelector(store=>store.movies.upcomingMovies)
   
    const getupcomingMovies = async () => {
        const data = await fetch(url, API_OPTIONS);
        const josn = await data.json();
dispatch(addUpcomingMovies(josn.results))
    }
    useEffect(() => {
     !upcomingMovies &&   getupcomingMovies() 
   },[])
}
export default useUpcomingMovies;