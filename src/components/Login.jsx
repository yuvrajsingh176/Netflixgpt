import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundimg, logo } from "../utils/constants";
const Login = () => {
  const navigate = useNavigate();

  const [errmsg, setErrmsg] = useState(null);
  const [signinstate, setsigninstate] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const signupHandler = (e) => {
    e.preventDefault();
    setsigninstate(!signinstate);
  };
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrmsg(message);
    if (message) return;

    if (!signinstate) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { logo },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((e) => {
          const errorCode = e.code;
          const errmsg = e.message;
          setErrmsg(errmsg);
          navigate("/");
        });
    } else {
      //sign uin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          //we could do the dispatch thing here or in sign up but insted doing mul
          //multiple times we will do it in root
        })
        .catch((e) => {
          const errorCode = e.code;
          const errmsg = e.message;
          setErrmsg(errmsg);
        });
    }
  };
  return (
    <div className="relative h-screen overflow-y-hidden">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="navbar-background"
          src={backgroundimg}
        />
      </div>
      <div className="flex absolute  h-full w-full md:justify-center  top-14">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex w-full md:w-1/2  h-2/3  flex-col items-center p-8 rounded-lg "
        >
          <h4 className="text-white text-4xl font-medium mb-8">
            {signinstate ? "Sign In" : "Sign Up"}
          </h4>

          {!signinstate && (
            <div className="w-8/12 mb-4 flex items-center">
              <input
                type="text"
                placeholder="Name"
                className="pt-4 pr-5 pb-2 pl-5 w-full bg-gray-700  text-white h-[50px] leading-6 outline-none  rounded-sm"
                ref={name}
              />
            </div>
          )}

          <div className="w-8/12 mb-4">
            <input
              type="text"
              placeholder="Email Address"
              className="py-2 pr-5 pl-5 w-full bg-gray-700  text-white h-[50px] leading-6 outline-none  rounded-lg"
              ref={email}
            />
          </div>
          <div className="w-8/12 mb-4">
            <input
              type="password"
              placeholder="Password"
              className="py-2 pl-5 w-full bg-gray-700   text-white h-[50px] leading-6 outline-none  rounded-lg"
              ref={password}
            />
          </div>

          <p className="text-red-600 mb-4 font-bold">{errmsg}</p>
          <div className="w-8/12 mb-6">
            <button
              onClick={handleButtonClick}
              className="py-4 pr-5  pl-6  rounded-lg bg-[#e50914] w-full flex align-middle justify-center"
            >
              <h1 className="text-white text-2xl font-medium">
                Sign {signinstate ? "in" : "up"}
              </h1>
            </button>
          </div>

          <div className="flex w-8/12 items-stretch text-white mb-4 justify-between">
            <label htmlFor="" className="items-center flex justify-center">
              <input type="checkbox" className="h-5 mr-1 w-5" />
              Remember me
            </label>
            <h1 className="ml-auto">Need help?</h1>
          </div>

          <h4 className="text-white w-8/12 text-xl">
            <span className="text-[#737373]"></span>
            <button>
              <p onClick={signupHandler}>
                {signinstate
                  ? "New to Netflix? Sign up now."
                  : "Already registered? Sign in now"}
              </p>
            </button>
            <div className="text-sm">
              <p className="bg-blue-700 w-fit p-1 rounded-md">Demo</p>
              <p className="bg-blue-700 w-fit p-1 mt-1 rounded-md">
                email: ducatimonster729@gmail.com
              </p>
              <p className="bg-blue-700 w-fit p-1 mt-1 rounded-md">
                password: 20Btrcs176@179
              </p>
            </div>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
