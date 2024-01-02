import { backgroundimg } from "../utils/constants"
import Gptmoviesuggestion from "./Gptmoviesuggestion"
import Gptsearchbar from "./Gptsearchbar"

const GPTSearch = () => {
    return (
        <div >
            <div className="fixed -z-10">
                <img src={backgroundimg}
                alt="back"
                />
            </div>
            <div className="">
            <Gptsearchbar />
            <Gptmoviesuggestion/>
            </div>
            
        </div>
    )
}
export default GPTSearch