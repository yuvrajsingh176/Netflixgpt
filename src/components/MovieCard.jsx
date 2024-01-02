import { imagecdn } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath)
        return null;
    return (<div className="w-[100px]  md:w-[192px] pr-4 ">
        <img
            src={imagecdn+posterPath}
            alt="movie card"/>
    
    </div>)
}
export default MovieCard;