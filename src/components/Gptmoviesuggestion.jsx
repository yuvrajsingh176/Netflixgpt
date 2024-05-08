import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Gptmoviesuggestion = () => {
    const movies = useSelector(store => store.gpt);
    const { gptmovies, gptmovienames } = movies;
    if (!gptmovienames)
        return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90 rounded-xl">
            <div className="p-4 m-4 font-bold text-lg "><h1>
            Search Results:{gptmovienames.join(",")}
            </h1></div>
            <div>
                {gptmovies?.length===0 && <div className="text-black">loading...</div>}
            </div>
            <div>
                {gptmovies?.map((Moviename,index) => (
                    <MovieList key={index} title={""} movies={Moviename}/>
            ))}
            </div>
            
        </div>
    )
}
export default Gptmoviesuggestion;
