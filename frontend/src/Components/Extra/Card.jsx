import React from 'react'

const Card = () => {
  const   title = " Big Title That im going to write is for You BABY m going to write is for You BABY"
  return (
    <div
        className="block w-96 lg:w-80 h-[450px] shadow md:p-3 p-1 hover:cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 transition transform ease-in">
        <a href="#!">
          <img
            className="rounded-t-lg "
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt="" />
        </a>

        <div className="pt-2">
          <h5
            className="mb-2 text-xl font-bold font-poppins line-clamp-2 text-neutral-800 dark:text-neutral-50">
          {title}
          </h5>
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
           Location : <span className='font-bold text-lg'> Peshawar </span>
          </p>
          
        </div>
 
  <hr/>
  
  
        <div className="pt-2 flex justify-between items-center justify-center">
        
          <p className=" text-base text-neutral-600 dark:text-neutral-200">
          From <span className='font-medium text-lg'> PKR 3999 </span>
          </p>

          <p className=" text-base text-neutral-600 dark:text-neutral-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

          7 Days 8 Nights
          </p>

        </div>

      
      </div>
  )
}

export default Card