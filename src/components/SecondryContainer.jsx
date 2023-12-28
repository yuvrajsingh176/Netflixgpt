import MovieList from "./MovieList";
import {useSelector} from 'react-redux'
const SecondryContainer = () => {
    const movies = useSelector(store => store.movies)
    console.log(movies)
    return (
        
        movies && 
        <div className=" bg-black">
                <div className="-mt-40 relative z-20">
                
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Trending"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
           
            </div>
            
    </div>)
}
export default SecondryContainer;