import { onAuthStateChanged, signOut } from 'firebase/auth'
import netflixlogo from '../assets/Netflixlogo.png'

import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    
    const dispatch = useDispatch();

    useEffect(() => {
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName,photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate('/browse')
            }
            else {
                dispatch(removeUser())
                navigate('/')
            
            }
     }) 
        return () => unsubscribe();
    },[])


    const handleSignout = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((err) => {
                console.log(err)

        })
    }
    return (
        <div className='z-10 flex justify-between absolute w-screen  px-8 py-2 bg-gradient-to-b from-black '>
        <img className='w-44'  src={netflixlogo} alt="netflix logo"/>
            {
            user?<div className='flex p-2' >
            <img className='w-12 h-12 rounded-md' src={user?.photoURL} alt='default user' />
            <button onClick={handleSignout}><h1 className='text-white font-bold '>
            Sign out
            </h1></button>
        </div>:""
      }
            
        </div>
    )
}
export default Header;