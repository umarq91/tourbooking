import React from 'react'
import slide2 from "../../Pages/LandingPage/data/saif.jpg"

const Card = () => {
  const   title = " Big Title That im going to write is for You BABY m going to write is for You BABY"
  return (
    <div
        className="block w-full lg:h-[530px] h-[480px] shadow   hover:cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 transition transform ease-in">
        <a href="#!">
          <img
            className="rounded-t-lg w-full object-cover h-[55%] "
            src={slide2}
            alt="" />
        </a>


          <div className="content p-2">

        
        <div className="pt-2">
          <h5
            className="mb-2 text-xl font-bold font-poppins line-clamp-3 text-neutral-800 dark:text-neutral-50">
          {title}
          </h5>
          <p className=" text-base text-neutral-600 text-yellow-600 font-poppins dark:text-neutral-200">
           Location : <span className=' text-lg font-semibold'> Peshawar </span>
          </p>
          
        </div>
 
  <hr/>
  
  
        <div className="pt-2 flex justify-between  items-center justify-center font-poppins">
        
          <p className=" text-base text-neutral-600 dark:text-neutral-200">
          From <span className='font-medium text-lg'> PKR 3999 </span>
          </p>

          <p className=" text-base text-neutral-600 dark:text-neutral-200 flex items-center font-poppins">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

          7 Days 8 Nights
          </p>

        </div>

        </div>
<button className='w-full bg-yellow-400 font-poppins font-bold h-10 hover:scale-105 ease-in transition-all hover:bg-red-600 '> Book Now  </button>
      </div>
  )
}

export default Card