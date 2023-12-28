import {  useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
const VideoBackground = ({id}) => {
    useMovieVideos(id);
    const trailerId=useSelector(store=>store.movies.trailerVideo?.key)

    return (
        <div className="w-screen">
            <iframe 
            className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}
export default VideoBackground;


