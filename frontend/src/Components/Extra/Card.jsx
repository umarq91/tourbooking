import React from 'react';

const Card = ({ tour }) => {
  const title =
    "Big Title That I'm going to write is for You BABY I'm going to write is for You BABY";
  return (
    <div className="block relative  w-[90%]  h-[430px] shadow hover:cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 transition transform ease-in">
    
        <div key={tour.id}>
          <a href="#!">
            <img
              className="rounded-t-lg w-full object-cover "
              src={tour?.gallery[0] || "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
              alt=""
            />
          </a>
{/* Type */}
    <div className='h-[30px] w-[110px] bg-green-500 absolute top-2 font-poppins text-center flex items-center justify-center '>
    {tour.type} Tour
    </div>

          <div className="content p-2">
            <div className="pt-2">
              <h5 className="mb-2 text-xl font-bold font-poppins line-clamp-3 text-neutral-800 dark:text-neutral-50">
                {tour.title}
              </h5>
              <p className="text-base font-light text-neutral-600 text-yellow-600 font-poppins dark:text-neutral-200 text-sm">
                Location : <span className="text-lg"> {tour.location} </span>
              </p>
            </div>

            <hr />

            <div className="pt-2 flex justify-between items-center justify-center font-poppins">
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                From <span className="font-medium text-lg"> PKR {tour.fee} </span>
              </p>

              <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                Duratin here
              </p>
            </div>
          </div>
          <button className="w-full bg-yellow-400 font-poppins font-bold h-10 hover:scale-105 ease-in transition-all hover:bg-red-600 ">
            {' '}
            Book Now{' '}
          </button>
        </div>
  
    </div>
  );
};

export default Card;
