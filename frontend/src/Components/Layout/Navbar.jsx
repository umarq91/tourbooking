import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
   const [menuopened,setMenuOpened]= useState(false)

   const toggleMenu = ()=> setMenuOpened(!menuopened)
  const options = [
    {link:'/',label:"Home",img:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
  },
  {link:'/tours',label:"Tours",img:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
</svg>

},   {link:'/contact',label:"Contact",img:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
</svg>

},

  ]



  return (

    <nav className="flex justify-between items-center bg-white bg-opacity-80   font-poppins shadow-lg fixed w-full left-[50%] top-1 py-2  px-8  z-30 translate-x-[-50%] ring-1 ring-white">
   <Link to={'/'} className="flex  justify-center items-center text-[18px] md:text-[25px]  font-bold ">
  <span className="text-[14px]"> World Of </span> 
  <spn> Adventure</spn>
   </Link>
   

   {/* Mid */}
   <ul className="hidden lg:flex h-full">
{options?.map((item)=>(

  <Link to={item.link} className="flex mx-8 relative text-gray-900 hover:text-blue-900 group">
   {item.img}
   {item.label}
  <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute">

  </span>
  </Link>

  ))}
   </ul>

{/* Last */}
<div className="hidden lg:block">


<div className="flex justify-between py-3 px-6 bg-gray-800 rounded-full text-white items-center hover:bg-gray-700 cursor-pointer ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>
<h3 className="font-light text-sm"> Sign in </h3>

</div>
</div>

{/* Mobile */}
{!menuopened?
<RxHamburgerMenu onClick={toggleMenu} className="lg:hidden inline-block cursor-pointer"/>

: 
<MdClose onClick={toggleMenu} className="lg:hidden inline-block cursor-pointer"/>}

<ul  className={menuopened?"flex flex-col justify-center p-10 fixed top-10 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md":"flex flex-col justify-center p-12 fixed top-14 right-[-100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"}>
{options?.map((item)=>(

  <Link to={item.link} className="flex gap-1 m-3 mx-3 relative text-gray-900 hover:text-blue-900 group">
   {item.img}
   {item.label}
  <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute">

  </span>
  </Link>

  ))}
   <button className="flex text-center gap-3 justify-center mt-5 ">
    <FaUser/>
    Logout
     </button>
   </ul>
    </nav>

  )
}

export default Navbar