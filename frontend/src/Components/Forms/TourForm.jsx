import React, { useEffect, useState } from 'react';
import PhotoUplaoder from "../Extra/PhotoUploader"
import axios from 'axios';
import { useParams } from 'react-router-dom';
const TourForm = () => {
  const [type, setType] = useState('');
  const  [addedPhotos,setAddedPhotos] = useState('')
  const [tourname,setTourname] = useState('')
   const [location,setLocation] = useState('')
   const [groupSize,setGroupSize] = useState(0)
   const [fee,setFee] = useState(0)
   const [city,setCity] = useState('')
   const [departure,setDeparture] = useState('')
   const [mapLocation,setMapLocation] = useState('')
   const [description,setDescription] = useState('')
  const [requirements,setRequirements] = useState('')
  const [thingstokeepinMind,setthingstokeepinmind] = useState('')
  const [included,setIncluded] = useState('')
  const [highlights,setHighlights] = useState('')
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);
  const  {id} = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/tour/add", {
        type,
        duration: { days, nights },
        addedPhotos,
        tourname,
        location,
        groupSize,
        fee,
        city,
        departure,
        mapLocation,
        description,
        requirements,
        thingstokeepinMind,
        included,
        highlights,
      });
     
  
      if (response.data.success === true) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error("Error adding tour:", error);
      // Handle the error here
    }
  };

 const handleUpdate= async(e)=>{
  e.preventDefault();
  try {
    const response= await axios.put('/api/tour/update/'+id,{
      type,
      duration: { days, nights },
      addedPhotos,
      tourname,
      location,
      groupSize,
      fee,
      city,
      departure,
      mapLocation,
      description,
      requirements,
      thingstokeepinMind,
      included,
      highlights,
    })
    if (response.data.success) {
    window.location.href = '/account/myuploads';
  }
  } catch (error) {
    console.log(error);
  }

 
 }

  useEffect(()=>{
    if(!id) return

    const getDetails = async () => {
      try {
        const response = await axios.get('/api/tour/details/' + id);
        const data = response.data;
        setTourname(data.tourname);
        setType(data.type);
        setLocation(data.location);
        setGroupSize(data.groupSize);
        setFee(data.fee);
        setNights(data.duration.nights);
        setDays(data.duration.days);
        setDeparture(data.departure);
        setAddedPhotos(data.gallery);
        setMapLocation(data.mapLocation);
        setDescription(data.description);
        setCity(data.city)
      } catch (error) {

        window.location.href = '/account/addform/add';
      
      }
    };
    
    getDetails();
    
   
  },[])




  return (
    <>
  <div className='lg:p-24 w-full max-w-screen-lg mx-auto bg-white'>

  <form className=''>
      <div className="relative z-0 w-full mb-6 group">
        <input
        value={tourname}
        onChange={(e)=>setTourname(e.target.value)}
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
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
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
            value={city}
            onChange={(e)=>setCity(e.target.value)}
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
            value={fee}
            onChange={(e)=>setFee(e.target.value)}
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fee Per Person
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
            value={groupSize}
            onChange={(e)=>setGroupSize(e.target.value)}
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
    value="family"
    checked={type === 'family'}
    onChange={(event) => setType(event.target.value)}
  />
  Family
</label>

<label>
  <input
    type="radio"
    value="friends"
    checked={type === 'friends'}
    onChange={(event) => setType(event.target.value)}
  />
  Friends
</label>

<label>
  <input
    type="radio"
    value="couple"
    checked={type === 'couple'}
    onChange={(event) => setType(event.target.value)}
  />
  Couple
</label>

<label>
  <input
    type="radio"
    value="culture"
    checked={type === 'culture'}
    onChange={(event) => setType(event.target.value)}
  />
  Culture
</label>

<label>
  <input
    type="radio"
    value="open"
    checked={type === 'open'}
    onChange={(event) => setType(event.target.value)}
  />
 Open
</label>
        </div>


                            {/* Duration */}

        <div className="relative z-0 w-full mb-6 flex  gap-3 items-center justify-center">
          <h1 className='font-semibold'>Duration </h1>
          <div className="grid">
 

          <label>
  <input
    type="radio"
    value="1day"
    checked={days === 1}
    onChange={() => {
      setDays(1);
      setNights(0);

    }}
  />
  1 Day Trip
</label> 
          <label>
  <input
    type="radio"
    value="2 Nights - 3 Days"
    checked={days === 3}
    onChange={() => {
      setDays(3);
      setNights(2);
    }}
  />
  2 Nights - 3 Days
</label>

<label>
  <input
    type="radio"
    value="3 Nights - 4 Days"
    checked={days === 4}
    onChange={() => {
      setDays(4);
      setNights(3);
    }}
  />
  3 Nights - 4 Days
</label>

<label>
  <input
    type="radio"
    value="4 Nights - 5 Days"
    checked={days === 5}
    onChange={() => {
      setDays(5);
      setNights(4);
    }}
  />
  4 Nights - 5 Days
</label>

<label>
  <input
    type="radio"
    value="5 Nights - 6 Days"
    checked={days === 6}
    onChange={() => {
      setDays(6);
      setNights(5);
    }}
  />
  5 Nights - 6 Days
</label>

<label>
  <input
    type="radio"
    value="6 Nights - 7 Days"
    checked={days === 7}
    onChange={() => {
      setDays(7);
      setNights(6);
    }}
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
            name="Departure"
            id="Departure"
            value={departure}
            onChange={(e)=>setDeparture(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="Departure"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
          Departure
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
            value={mapLocation}
            onChange={(e)=>setMapLocation(e.target.value)}
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
<textarea    value={description}
        onChange={(e)=>setDescription(e.target.value)} id="message" rows="7" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Detailed Description about a Tour!"></textarea>
      </div>

<hr/>
<div className='my-10'> 

<h2 className='text-center text-2xl font-poppins '>
   Keep this in Mind
    </h2>
    <p className='text-center text-sm'> All the sections below are in points format , put comma after every point eg► point no 1 , point no 2, point no 3 </p>
</div>
    <hr/>

                            {/* Requirements */}

<div className="relative z-0 w-full mb-6 group">
<label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirements</label>
<textarea    value={requirements}
        onChange={(e)=>setRequirements(e.target.value)} id="message" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write All the necessary Requirements that will be needing for this Tour"></textarea>
      </div>

                        {/* Things to keep in Mind */}
<div className="relative z-0 w-full mb-6 group">
<label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Things To Keep in Mind</label>
<textarea   value={thingstokeepinMind}
        onChange={(e)=>setthingstokeepinmind(e.target.value)}  id="message" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Tips And things to keep in mind for every tourist"></textarea>
      </div>



                              {/* Included */}
<div className="relative z-0 w-full mb-6 group">
<label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Included</label>
<textarea    value={included}
        onChange={(e)=>setIncluded(e.target.value)} id="message" rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write all The things that are included in the Place in this Format eg Guitar,Bornfire,BBQ Nights etc "></textarea>
      </div>



                              
                              {/*  Highlights*/}
<div className="relative z-0 w-full mb-6 group">
<label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highlights</label>
<textarea    value={highlights}
        onChange={(e)=>setHighlights(e.target.value)} id="message" rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write all The Places You'll Visit on the way, in this Format eg Kalam,Mahondand Lake etc "></textarea>
      </div>




{/* Photos */}

<PhotoUplaoder addedPhotos={addedPhotos} onChange={setAddedPhotos}/>



{
  !id ? 
  <button
  type="submit"
  onClick={handleSubmit}
  className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Add Tour
</button>
  :
  <button
  type="submit"
  onClick={handleUpdate}
  className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Update Tour
</button>
}
 
    </form>




   </div> 
  </>
  );
};

export default TourForm;
