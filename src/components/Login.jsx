import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

const [signinstate,setsigninstate]=useState(true)

    const signupHandler = (e) => {
        e.preventDefault();
    setsigninstate(!signinstate)
}
    return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="rounded-lg   relative top-32 h-[580px] w-4/12 mx-auto bg-[rgba(0,0,0,.75)]" action="">
       
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
         
                      />
                  </div>
                    }
             
                  
                  <div className="pt-8 w-8/12 flex items-center">
                  <input
          type="text"
          placeholder="Email Address"
          className="pt-4 pr-5 pb-2 pl-5 w-full bg-gray-700  text-white h-[50px] leading-6 outline-none  rounded-sm"
         
                      />
                  </div>
                  <div className="pt-8 w-8/12 flex items-center">
                  
        <input
          type="password"
          placeholder="Password"
          className="pt-4  pb-2 pl-5 w-full bg-gray-700   text-white h-[50px] leading-6 outline-none  rounded-sm"

                      />
                  </div>          
                  <div className="pt-14 w-8/12">
                      <button className="pt-6 pr-5 pb-6 pl-6  rounded-md bg-[#e50914] w-full flex align-middle justify-center">
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
                      <button onClick={signupHandler}>
                            {
                                signinstate?"New to Netflix? Sign up now.":"Already registered? Sign in now"
                }
                      </button>
                  </h4>
                  
                  
              </div>
                  
      </form>
    </div>
  );
};

export default Login;
