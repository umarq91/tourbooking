import React, { useState } from 'react';

const TourForm = () => {
  const [type, setType] = useState('');
  const [duration,setDuration] = useState('')

  return (
    <>
  <div className='lg:p-24 max-w-[95%]'>

  <form className=''>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="tour_name"
          name="tour_name"
          id="tour_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="tour_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Tour Name
        </label>
      </div>

{/* Location and City */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="Location"
            id="Location"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Location"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Location
          </label>
        </div>


        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="City"
            id="City"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="City"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City
          </label>
        </div>
      </div>

{/* Group Size amd Price */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Group Size"
            id="Group Size"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Group Size"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Group Size
          </label>
        </div>
      
      </div>




{/* Radio Buttons for type and duration */}
      <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-6 flex  gap-3 items-center justify-center">
          <h1 className='font-semibold'>Type: </h1>
        <label>
        <input
          type="radio"
          value="Family"
          checked={type === 'Family'}
          onChange={()=>setType(event.target.value)}
        />
       Family
      </label>

      <label>
        <input
          type="radio"
          value="Friends"
          checked={type === 'Friends'}
          onChange={()=>setType(event.target.value)}
        />
       Freinds
      </label>
       <label>
        <input
          type="radio"
          value="Couple"
          checked={type === 'Couple'}
          onChange={()=>setType(event.target.value)}
        />
       Couple
      </label>
        </div>

        <div className="relative z-0 w-full mb-6 flex  gap-3 items-center justify-center">
          <h1 className='font-semibold'>Duration </h1>
          <div className="grid">

        <label>
        <input
          type="radio"
          value="2 Nights - 3 Days"
          checked={duration === '2 Nights - 3 Days'}
          onChange={()=>setDuration(event.target.value)}
        />
       2 Nights - 3 Days
      </label>

      <label>
        <input
          type="radio"
          value="3 Nights - 4 Days"
          checked={duration === '3 Nights - 4 Days'}
          onChange={()=>setDuration(event.target.value)}
        />
       3 Nights - 4 Days
      </label>
       <label>
        <input
          type="radio"
          value="4 Nights - 5 Days"
          checked={duration === '4 Nights - 5 Days'}
          onChange={()=>setDuration(event.target.value)}
        />
       4 Nights - 5 Days
      </label>
      <label>
        <input
          type="radio"
          value="5 Nights - 6 Days"
          checked={duration === '5 Nights - 6 Days'}
          onChange={()=>setDuration(event.target.value)}
        />
      5 Nights - 6 Days
      </label>
      <label>
        <input
          type="radio"
          value="6 Nights - 7 Days"
          checked={duration === '6 Nights - 7 Days'}
          onChange={()=>setDuration(event.target.value)}
        />
      6 Nights - 7 Days
      </label>
      </div>
        </div>
      </div>



{/* Hotel And Map Location */}
<div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Hotel"
            id="Hotel"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="Hotel"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           Hotel for Stay
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Map"
            id="Map"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Map"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Map Location
          </label>
        </div>
      
      </div>


{/* Description Text-Area */}
<div className="relative z-0 w-full mb-6 group">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
<textarea id="message" rows="7" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Detailed Description about a Tour!"></textarea>
      </div>



{/* Requirements */}
<div className="relative z-0 w-full mb-6 group">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirements</label>
<textarea id="message" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write All the necessary Requirements that will be needing for this Tour"></textarea>
      </div>

{/* Things to keep in Mind */}
<div className="relative z-0 w-full mb-6 group">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Things To Keep in Mind</label>
<textarea id="message" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Tips And things to keep in mind for every tourist"></textarea>
      </div>



{/* Perk Highlights*/}
<div className="relative z-0 w-full mb-6 group">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Perks</label>
<textarea id="message" rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write all The Perks about the Place in this Format eg Guitar,Bornfire,BBQ Nights etc "></textarea>
      </div>



{/*  Highlights*/}
<div className="relative z-0 w-full mb-6 group">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highlights</label>
<textarea id="message" rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write all The Places You'll Visit on the way, in this Format eg Kalam,Mahondand Lake etc "></textarea>
      </div>










      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>




   </div> 
  </>
  );
};

export default TourForm;
