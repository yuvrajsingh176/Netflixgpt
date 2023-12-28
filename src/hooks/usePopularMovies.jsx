import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const URL = "https://api.themoviedb.org/3/movie/popular";
    const dispatch = useDispatch();
    const fetchPopularMovies =async () => {
        const data =await fetch(URL, API_OPTIONS);
        const json =await data.json();
dispatch(addPopularMovies(json.results))
    }
    useEffect(() => {
        fetchPopularMovies();
    },[])

}
export default usePopularMovies;