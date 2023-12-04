import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import {UserContext} from "../../Context/UserContext"
import {navbarOptions , UserDropDownOptions} from "../../Data/NavbarData"
import axios from "axios";



const Navbar = () => {
   const [menuopened,setMenuOpened]= useState(false);
   const [UserDropDown,setUserDropDown] = useState(false)
   const [profileDropDown , setProfileDropDown] = useState(false)

     const {user} = useContext(UserContext)
   const toggleMenu = ()=> setMenuOpened(!menuopened)
   const toggeleUserDropDon = ()=> setMenuOpened(!profileDropDown)



const handlelogout = ()=>{
 const res =  axios.get('/api/auth/logout');
 window.location.reload()

}

  return (
    <nav className="flex justify-between items-center bg-white bg-opacity-80   font-poppins shadow-lg fixed w-full left-[50%] top-1 py-2  px-8  z-30 translate-x-[-50%] ring-1 ring-white">
      <Link
        to={"/"}
        className="flex  justify-center items-center text-[18px] md:text-[25px]  font-bold "
      >
        <span className="text-[14px]"> World Of </span>
        <span> Adventure</span>
      </Link>

      {/* Mid */}
      <ul className="hidden lg:flex h-full">
        {navbarOptions?.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="flex mx-8 relative text-gray-900 hover:text-blue-900 group"
          >
            {item.img}
            {item.label}
            <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute"></span>
          </Link>
        ))}
      </ul>

{/* Last */}
{!user ? (
  <Link to={"/sign-in"}>
    <div className="hidden lg:block">
      <div className="flex justify-between py-3 px-6 bg-gray-800 rounded-full text-white items-center hover:bg-gray-700 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="font-light text-sm"> Sign in </h3>
      </div>
    </div>
  </Link>
) : (
  <Link to={'/account/profile'} className="hidden lg:flex"> {/* Use hidden lg:flex to hide on small screens and show on larger screens */}
    <div className="flex justify-between gap-2 py-3 px-4 bg-gray-800 rounded-full text-white items-center hover:bg-gray-700 cursor-pointer">
      <h3 className="font-light text-sm"> {user?.username} </h3>
      <img src={user.profile} className="rounded-full h-6 w-6"/>
      {/* <CiMenuBurger /> */}
    </div>
  </Link>
)}


      {/* Mobile */}
      {!menuopened ? (
        <RxHamburgerMenu
          onClick={toggleMenu}
          className="lg:hidden inline-block cursor-pointer"
        />
      ) : (
        <MdClose
          onClick={toggleMenu}
          className="lg:hidden inline-block cursor-pointer"
        />
      )}

      <ul className={
        menuopened
            ? " lg:mt-3 flex flex-col justify-center p-10 fixed top-10 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
            : "flex flex-col justify-center p-12 fixed top-14 right-[-100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
        }
      >
        {/* Conditional Rendering on Drop Down Options on small screen */}
        {!user? (
          <>
          {navbarOptions?.map((item) => (
            <Link
            key={item.link}
              to={item.link}
              className="flex gap-1 m-3 mx-3 relative text-gray-900 hover:text-blue-900 group"
              >
              {item.img}
              {item.label}
              <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute"></span>
              </Link>
              ))}
              </>
              )
        :(
          <>
          {UserDropDownOptions?.map((item) => (
            <Link
            key={item.link}
              to={item.link}
              className="flex gap-1 m-3 mx-3 relative text-gray-900 hover:text-blue-900 group"
              >
              {item.img}
              {item.label}
              <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute"></span>
              </Link>
              ))}
              </>
              )
        
         }
      

        {/* This is for Both Mobile / PC .. This will pop up when user is Logged in */}


   
        {!user ? (
          <button className="flex text-center gap-3 justify-center mt-5 ">
            <FaUser />
            Sign-in
          </button>
        ) : (
          <button
            className="flex text-center gap-3 justify-center mt-5 hover:text-red-500"
            onClick={handlelogout}
          >
            <FaUser />
            Logout
          </button>
        )}


      </ul>
    </nav>
  );
}

export default Navbar