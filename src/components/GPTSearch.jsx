import { backgroundimg } from "../utils/constants"
import Gptmoviesuggestion from "./Gptmoviesuggestion"
import Gptsearchbar from "./Gptsearchbar"

const GPTSearch = () => {
    return (
        <>
        <div className="fixed -z-10  ">
        <img className="h-screen object-cover w-screen" src={backgroundimg}
        alt="back"
        />
            </div>
            
            <div className=" ">
           
            <div className="">
            <Gptsearchbar />
            <Gptmoviesuggestion/>
            </div>
            
        </div>
        </>
        
    )
}
export default GPTSearch