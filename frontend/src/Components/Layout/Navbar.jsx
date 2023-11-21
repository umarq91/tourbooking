import { Link, Navigate, redirect } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

import axios from "axios";

const Navbar = () => {

  
  const {user,setUser} = useContext(UserContext);
  const [openDropDown,setOpenDropDown] = useState(false)



  const handleDropDownClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    setOpenDropDown((prev) => !prev);
  };
  window.addEventListener('click',()=> setOpenDropDown(false))

  async function logout() {drop
    await axios.get('/api/authlogout')
    setUser(null)
    window.location.reload(); // Refresh the page
    window.location.href = '/'; // Redirect to the index page
    
}


    return (
      <header className="p-1  bg-white drop-shadow-2xl drop-shadow-md   top-0 grid grid-cols-3 px-3 md:p-10 ">
        {/* Left Section  */}

        <Link to={"/"} className="flex items-center gap-1">
          <span className="text-[15px] font-semibold   sm:text-sm md:text-xl">
            rateAproperty
          </span>
        </Link>

        {/* Middle Section -- Search */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm mb-2">
          <input
            type="text"
            placeholder="Start your search"
            className="w-full   bg-transparent border-none my-0 py-0  rounded pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-10 bg-red-400 text-white rounded-full p-1 cursor-pointer hidden md:inline-flex md:mx-2 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        {/* Right Section */}

        <div className="flex space-x-4 items-center justify-end  ">
          <div>
            <Link
              to={user ? "#" : "/sign-in"}
              onClick={handleDropDownClick}
              className="flex items-center  border-2 gap-1 border-gray-300 rounded-full py-2 px-2 h-12 "
            >
              {user ? (
                <div className="md:font-semibold font-xl sm:text-sm">
                  {user?.username}
                </div>
              ) : (
                <p>Test</p>
              )}

              <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                {user ? (
                  <img
                    src={user.profile}
                    className="h-8 w-8 object-cover rounded-full"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-6 relative "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                )}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Link>
          </div>

          {/*   this below statement checks if the user is logged in then setOpendropdrown to true and rest is dropDown  */}
          {user && openDropDown && (
            <div className="flex flex-col dropDownMenu z-104324">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link to="/account">My Profile</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/account/places"> My Reviews </Link>
                </li>
                <li>
                  {" "}
                  <button className="bg-white" onClick={logout}>
                    {" "}
                    Logout{" "}
                  </button>
                </li>
              </ul>
            </div>
          )}

          
        </div>
      </header>
    );
}
 
export default Navbar;