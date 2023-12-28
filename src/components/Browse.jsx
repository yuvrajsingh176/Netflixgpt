import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
    useNowplayingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondryContainer/>
        </div>
    )
}
export default Browse;