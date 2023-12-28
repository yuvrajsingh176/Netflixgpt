import { signOut } from 'firebase/auth'
import netflixlogo from '../assets/Netflixlogo.png'
import man from "../assets/man.png"
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.userReducer);
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
            navigate('/')
            })
            .catch((err) => {
            navigate('/error')
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