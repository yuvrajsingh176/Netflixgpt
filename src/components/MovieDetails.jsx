import { useSelector } from "react-redux";
import MainDetailsContainer from "./MainDetailsContainer";
import SecDetailsCont from "./SecDetailsCont";

const MovieDetails = () => {
 
const id=useSelector(store=>store.details.id)



    
    return (
        <div className="bg-black ">
            <div className="mx-4 pt-2">
            <MainDetailsContainer id={ id} />
            <SecDetailsCont id={ id} />
            </div>
          
        </div>
    )
}
export default MovieDetails;