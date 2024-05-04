import { useDispatch, useSelector } from 'react-redux';
import {lang} from '../utils/languageConstant'
import { useRef, useState } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptmovies, addmoviesNames } from '../utils/gptSlice';
const Gptsearchbar = () => {
    const curlangage = useSelector(store => store.config.lang)
    const [searchtext, setst] = useState('');
    const dispatch = useDispatch();
    const Query = "Act as a movie recommendation system and suggest movies for " 
        + searchtext +
        " and only give me names of 5 movies, comma seperated like the example results given ahead : Gadar, Don,Sholay,Golmal,Hulchal";
    
    const fetchFromtmdb = async (movie) => {
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
            const data =await fetch(url, API_OPTIONS);
            const json = await data.json();
            return json.results;
        }
        catch (e) {
            console.log(e)
        }
   }
   
   
    const handleSearch = async () => {

        const gptResults= await openai.chat.completions.create({
            messages: [{ role: 'user', content:Query  }],
            model: 'gpt-3.5-turbo',
          });
        const movies = gptResults.choices?.[0]?.message?.content.split(",");
        dispatch(addmoviesNames(movies))
        const promisedata = movies.map((movie) => fetchFromtmdb(movie));
        const moviesfetched = await Promise.all(promisedata);
        dispatch(addGptmovies(moviesfetched));
   }

    return <div className="md:pt-[10%]  pt-[40%] ">
        <form onSubmit={(e)=>e.preventDefault()} className="w-full rounded-xl md:w-1/2 bg-black grid grid-cols-12  mx-auto">
            <input  onChange={(e) => {
                setst(e.target.value)
            }}  type="text" className="p-4 m-4 col-span-9 rounded-xl" placeholder={lang[curlangage].gptplaceholder} />
            <button   onClick={handleSearch} className="py-2 col-span-3 m-4  px-4 bg-red-800 text-white rounded-xl"> {lang[curlangage].search}</button>
        </form>
    </div>
}
export default Gptsearchbar;