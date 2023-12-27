import netflixlogo from '../assets/Netflixlogo.png'
const Header = () => {
    return (
        <div className='z-10 absolute w-52 left-32 px-8 py-2 bg-gradient-to-b from-black '>
        <img className='w-44'  src={netflixlogo} alt="netflix logo"/>
       
        </div>
    )
}
export default Header;