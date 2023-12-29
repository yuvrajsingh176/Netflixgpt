import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
    const showgptserach = useSelector(store => store.gpt.showGptsearch);
    

    useNowplayingMovies();
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            {showgptserach ?
                <GPTSearch /> :
                <>
                <MainContainer />
            <SecondryContainer/>
                </>   
            }
            
        </div>
    )
}
export default Browse;