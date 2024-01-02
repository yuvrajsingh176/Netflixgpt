import { useSelector } from "react-redux";
import MainDetailsContainer from "./MainDetailsContainer";
import SecDetailsCont from "./SecDetailsCont";

const MovieDetails = () => {
 
const id=useSelector(store=>store.details.id)



    
    return (
        <div className="bg-black w-full">
            <div className="pt-2 w-full">
            <MainDetailsContainer id={ id} />
            <SecDetailsCont id={ id} />
            </div>
          
        </div>
    )
}
export default MovieDetails;