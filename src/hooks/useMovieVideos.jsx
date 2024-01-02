import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieVideos = (id) => {
   
    const URL=`https://api.themoviedb.org/3/movie/${id}/videos`
    const dispatch = useDispatch();
    const trialer = useSelector(store => store.movies.trailerVideo);

    const fetchMovieVideos = async () => {
        const data =await fetch(URL, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((mov) => mov.type === "Trailer");
        const trailer =filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailer(trailer));
    }
    useEffect(() => {
      !trialer && fetchMovieVideos();
},[])

}
export default useMovieVideos;