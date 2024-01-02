import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { createMovieDetails } from "../utils/movieDetalsSlice";

const MainDetailsContainer = ({ id }) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
    const dispatch = useDispatch();
    const fetchTrailerData = async () => {
        const trailer =await fetch(url, API_OPTIONS);
        const json = await trailer.json();
        const filteredData = json.results.filter(video => video.type === "Trailer")
        const trailerData = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(createMovieDetails(trailerData));
    }
    useEffect(() => {
     fetchTrailerData() 
    }, [])
    const trailerId = useSelector(store => store.details.movieDetails?.key)
    return (
        <div className="">
            <div className="w-screen ">
            <iframe 
            className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        </div>
    )
}
export default MainDetailsContainer