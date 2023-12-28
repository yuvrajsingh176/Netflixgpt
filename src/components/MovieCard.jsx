import { imagecdn } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    return (<div className="w-[192px] pr-4">
        <img
            src={imagecdn+posterPath}
            alt="movie card"/>
    
    </div>)
}
export default MovieCard;