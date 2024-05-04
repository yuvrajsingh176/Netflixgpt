import { imagecdn } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath)
        return null;
    return (<div className="w-[100px] h-full  md:w-[192px] pr-4 rounded-xl object-cover">
        <img
            src={imagecdn+posterPath}
            alt="movie card"
        className="rounded-xl object-cover"
        />
    
    </div>)
}
export default MovieCard;