import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import{checkValidateData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundimg, logo } from "../utils/constants";
const Login = () => {
    const navigate = useNavigate();

    const [errmsg, setErrmsg] = useState(null);
const [signinstate,setsigninstate]=useState(true)
    const email = useRef(null);
    const password = useRef(null);
const name=useRef(null)
    const signupHandler = (e) => {
        e.preventDefault();
    setsigninstate(!signinstate)
    }
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        const message = checkValidateData(email.current.value, password.current.value)
        setErrmsg(message)
        if (message) return;

        if (!signinstate) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredentials) => {
                    const user = userCredentials.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:{logo}
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL:photoURL
}))
                    })
                        .catch(err => {
                            console.log(err)
                    })
                })
                .catch(e => {
                    const errorCode = e.code;
                    const errmsg = e.message;
                    setErrmsg(errmsg)
navigate('/')

            })
        }
        else {
            //sign uin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    console.log(user)
                    //we could do the dispatch thing here or in sign up but insted doing mul
                    //multiple times we will do it in root  
               
                })
                .catch(e => {
                    const errorCode = e.code;
                    const errmsg = e.message;
                    setErrmsg(errmsg)
                    console.log(err)

           
                })
        }

    }
    return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src={backgroundimg}
        />
      </div>
            <form onSubmit={(e) => {
                e.preventDefault();
      }} className="rounded-lg   relative top-32 h-[580px] w-4/12 mx-auto bg-[rgba(0,0,0,.75)]" action="">
       
              <div className="flex flex-col items-center pt-8">
              
                    <h4 className="text-white text-4xl font-medium">
                        {
                            signinstate?"Sign In":"Sign Up"
                    }    
                       
                    
                    </h4>
                 
                    {
                        signinstate===false && <div className="pt-8 w-8/12 flex items-center">
                  <input
          type="text"
          placeholder="Name"
          className="pt-4 pr-5 pb-2 pl-5 w-full bg-gray-700  text-white h-[50px] leading-6 outline-none  rounded-sm"
         ref={name}
                      />
                  </div>
                    }
             
                  
                  <div className="pt-8 w-8/12 flex items-center">
                  <input
          type="text"
          placeholder="Email Address"
          className="pt-4 pr-5 pb-2 pl-5 w-full bg-gray-700  text-white h-[50px] leading-6 outline-none  rounded-sm"
         ref={email}
                      />
                  </div>
                  <div className="pt-8 w-8/12 flex items-center">
                  
        <input
          type="password"
          placeholder="Password"
          className="pt-4  pb-2 pl-5 w-full bg-gray-700   text-white h-[50px] leading-6 outline-none  rounded-sm"
ref={password}
                      />
                    </div>   
                  
                    <p className="text-red-600 pt-2 font-bold">{ errmsg}</p>
                  <div className="pt-14 w-8/12">
                      <button onClick={handleButtonClick} className="pt-6 pr-5 pb-6 pl-6  rounded-md bg-[#e50914] w-full flex align-middle justify-center">
                          <h1 className="text-white text-2xl font-medium ">
                          Sign {signinstate?" in ":" up "}    
                          </h1>
                      </button>
                  
                  </div>
    
                  <div className="flex w-8/12 items-stretch text-white pt-4 justify-between">
   
                      <label htmlFor="" >
                          <input type="checkbox" className="h-5 mr-1 w-5 " />
                          Remember me
                      </label>
    <h1 className="ml-auto">Need help?</h1>
</div>

                  <h4 className="text-white w-8/12 pt-6 text-xl">
                      <span className="text-[#737373]"></span>
                      <button >
                            {
                                <p onClick={signupHandler}>
                                    {
                                        signinstate?"New to Netflix? Sign up now.":"Already registered? Sign in now"

                                    }
                                    
                                </p>
                }
                      </button>
                  </h4>
                  
                  
              </div>
                  
      </form>
    </div>
  );
};

export default Login;
