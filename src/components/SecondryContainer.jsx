import { lang } from "../utils/languageConstant";
import MovieList from "./MovieList";
import {useSelector} from 'react-redux'
const SecondryContainer = () => {
    const movies = useSelector(store => store.movies)
    const curlangage=useSelector(store=>store.config.lang)
    return (
        
        movies && 
        <div className=" bg-black">
                <div className="mt-0 md:-mt-40 relative z-20">
                
            <MovieList title={lang[curlangage].nowplaying} movies={movies.nowPlayingMovies} />
            <MovieList title={lang[curlangage].trending} movies={movies.popularMovies} />
            <MovieList title={lang[curlangage].toprated} movies={movies.topratedMovies} />
            <MovieList title={lang[curlangage].upcoming} movies={movies.upcomingMovies} />
           
            </div>
            
    </div>)
}
export default SecondryContainer;