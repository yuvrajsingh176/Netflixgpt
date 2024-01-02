import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const URL = "https://api.themoviedb.org/3/movie/popular";
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const fetchPopularMovies =async () => {
        const data =await fetch(URL, API_OPTIONS);
        const json =await data.json();
dispatch(addPopularMovies(json.results))
    }
    useEffect(() => {
        !popularMovies &&  fetchPopularMovies();
    },[])

}
export default usePopularMovies;