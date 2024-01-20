import { onAuthStateChanged, signOut } from "firebase/auth";
import netflixlogo from "../assets/Netflixlogo.png";

import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";

import { supported_lang } from "../utils/constants";
import { lang } from "../utils/languageConstant";
import { changeLanuage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const searchbar=useSelector((store)=>store.gpt.showGptsearch )
  const dispatch = useDispatch();
  const handleGptclick = () => {
    dispatch(toggleGptSearchView());
  };
  const curlang=useSelector(store=>store.config.lang)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
    const handleselectedChange = (e) => {
      dispatch(changeLanuage(e.target.value))
  };
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="z-10 flex flex-col md:flex-row justify-between absolute w-screen  px-8 py-2 bg-gradient-to-b from-black  ">
      <img className= " w-24 md:w-44  mx-auto md:mx-0" src={netflixlogo} alt="netflix logo" />
      {user ? (
        <div className="flex justify-between p-2">
          <select
            onChange={handleselectedChange}
            className="bg-purple-700 text-white rounded-lg md:p-2 md:m-2"
          >
              {    supported_lang.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            className="bg-purple-700 rounded-md text-white md:p-3 md:m-2  align-middle "
            onClick={handleGptclick}
          >
            {
              searchbar ? "Homepage" : "GPT " + lang[curlang].search
         }
          </button>
         
          <button onClick={handleSignout}>
            <h1 className="text-white font-bold ">Sign out</h1>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
