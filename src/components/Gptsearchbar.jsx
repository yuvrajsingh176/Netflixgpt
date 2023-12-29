import { useSelector } from 'react-redux';
import {lang} from '../utils/languageConstant'
const Gptsearchbar = () => {
  const curlangage = useSelector(store => store.config.lang)
    console.log()
    return <div className="pt-[10%] ">
        <form className=" w-1/2 bg-black grid grid-cols-12  mx-auto">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[curlangage].gptplaceholder} />
        <button className="py-2 col-span-3 m-4  px-4 bg-red-800 text-white rounded-xl">{lang[curlangage].search}</button>
        </form>
    </div>
}
export default Gptsearchbar;