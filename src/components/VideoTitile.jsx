import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";

const VideoTitle = ({title,overview}) => {
const curlang=useSelector(store=>store.config.lang)
    return (

        <div className="w-screen aspect-video  pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-lg md:text-6xl w-1/2 font-bold">{title}</h1>
            <h1 className="hidden  p-6 text-lg w-2/4">{overview}</h1>
            
            <div className="flex mt-4">
                <button className="bg-white rounded-lg hidden md:inline-block  p-4 px-12 text-xl text-black hover:bg-opacity-75">{lang[curlang].play}</button>
            <button className=  "hidden md:inline-block bg-gray-500 rounded-lg mx-2  p-4 px-12 text-xl bg-opacity-30  text-white">{lang[curlang].moreinfo}</button>
            
            </div>
        </div>
    )
}
export default VideoTitle;