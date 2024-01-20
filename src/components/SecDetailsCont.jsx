import { useEffect } from "react"
import { API_OPTIONS, IMDB_APIKEY, imagecdn } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { casts, createMovieInfo } from "../utils/movieDetalsSlice";

const SecDetailsCont = ({id}) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const dispatch = useDispatch()
    const fetchInfo = async() => {
        const data =await fetch(url, API_OPTIONS);
        const json = await data.json();
dispatch(createMovieInfo(json))
    }
    useEffect(() => {
        fetchInfo()
    },[])
    const movieInfo = useSelector(store => store.details?.movieInfo);

    return (
        <div className="mt-4 flex justify-center items-center "> 
            <div className="w-3/4">
            
            <div >
                <img className="w-full h-full md:w-1/2 md:h-1/2" src={imagecdn + movieInfo?.backdrop_path } />
            </div>
            <div className="text-white w-full pt-9">
             
                <h1 className="text-4xl md:text-6xl mt-4 font-bold">{ movieInfo?.title }</h1>
                    <h1 className="mt-2 text-lg"> {movieInfo?.tagline}</h1>
           <h1 className="mt-2 text-2xl md:text-4xl font-bold">Overview:</h1>
                <h1 className="text-xl">{movieInfo?.overview }</h1>
           
                    <h1 className="mt-3 text-xl font-bold">IMDB rating: {movieInfo?.vote_average}</h1>
                <div className="my-2 text-xl font-bold">
                    <h1 className="my-2">Status: { movieInfo?.status}</h1>
                <h1 className="my-2">Release Date: {movieInfo?.release_date}</h1>
                <h1 className="my-2"    >Runtime: {movieInfo?.runtime} mins</h1>
                    
                </div>
              
                </div>
            </div>
                
        </div>
    )
}
export default SecDetailsCont