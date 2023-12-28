import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
    useNowplayingMovies();
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondryContainer/>
        </div>
    )
}
export default Browse;