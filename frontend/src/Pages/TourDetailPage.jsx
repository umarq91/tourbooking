import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'react-image-gallery/styles/css/image-gallery.css'
import axios from "axios"
import ImageGallery from 'react-image-gallery'
import {UserContext} from "../Context/UserContext"
import { FaWhatsapp } from "react-icons/fa";
import BreadCrumbs from '../Components/Extra/BreadCrumbs'

export const TourDetailPage = () => {
    const {id} = useParams()

 
   const [place,setPlace] = useState({})
   const [loading, setLoading] = useState(true);
   const [numOfPeople,setNumOfPeopl] = useState(1);
   const [total,setTotal] = useState(0)
const {user} = useContext(UserContext)
  useEffect(()=>{
    const getdata = async () => {
      try {
        const { data } = await axios.get(`/api/tour/${id}`);
        setPlace(data);
        setLoading(false)
        console.log(data);
       
      } catch (error) {
        console.error('Error fetching data:');
      }
    };

    getdata();
  }, []);

  useEffect(() => {
    // Calculate the total after setting the place state
    setTotal(numOfPeople * place.fee);
  }, [numOfPeople, place.fee]);
  


  const handleproceedBooking = ()=>{

      const phoneNumber = '923159758559'; // Replace with the recipient's phone number
      const message = encodeURIComponent(`Hello, I would like to Book My Tour that is ' ${place.tourname} ' that cost ${place.fee} per person . Tour id is ${place._id} . Booking of Number of People :  ${numOfPeople} 
      `);
    
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
      window.location.href = whatsappURL;
  }

  return (
    <div className="md:mt-16">
      {loading ? (
        // Display a loading indicator or placeholder while data is being fetched
        <p className="text-4xl font-semibold font-poppins text-center">
          Loading...
        </p>
      ) : (
        // Display the content when data has been fetched
        <>
          <div className="relative">
            <img
              src={place.gallery[0]}
              className="w-full max-h-96 object-cover"
              alt="Tour Gallery"
              style={{ filter: "brightness(0.5)" }}
            />
            <h1
              className="absolute bottom-4 text-white text-3xl font-poppins font-semibold px-2
            md:px-12 md:py-6 md:text-5xl
            "
            >
              {" "}
              {place.tourname}{" "}
            </h1>
          </div>

          <div className='max-w-6xl mx-auto px-10 mt-10'>
          <BreadCrumbs tour={place?.tourname}/>

          </div>

          {/* Details Section */}
          <div className="mx-8 max-w-6xl mx-auto md:flex  px-6 sm:px-16">



            {/* Left Section */}
            <div className="md:w-[70%] font-poppins">
              {/* Duration */}
              <div className="timing my-16 flex gap-3 font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" text-blue-700 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                

                <h3 className="text-xl  ">
                  {" "}
                  {place.duration?.days}{" "}
                  {place.duration.days > 1 ? " Days " : "Day "}{" "}
                </h3>
                {place.duration.nights > 0 && (
                  <h3 className="text-xl  ">
                    {" "}
                    ({place.duration?.nights} Nights )
                  </h3>
                )}
              </div>

              <div className="flex gap-2 font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8  self-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>

                <h2 className=" text-4xl font-semibold"> Tour Details </h2>
              </div>

              {/* More Details */}
              <div className="descri my-20">
                {/* Tour Description */}
                <div className="my-16">
                  <h2 className="text-3xl my-2"> Description </h2>
                  <p className="text-gray-600">{place.description} </p>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8" />

                <div className="md:flex justify-around">
                  <h1 className="text-2xl"> Location :</h1>
                  <h1 className="text-xl text-gray-600"> {place.location} </h1>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8" />

                <div className="md:flex justify-around">
                  <h1 className="text-2xl"> Trip type :</h1>
                  <h1 className="text-xl text-gray-600"> {place.type} </h1>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />

                {/* Departure */}
                <div className="md:flex justify-around ">
                  <h1 className="text-xl"> Departure/Return :</h1>
                  <h1 className="text-xl text-gray-600"> {place.departure} </h1>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />

                <div className="md:flex justify-around">
                  <h1 className="text-2xl"> Trip Group Size :</h1>
                  <h1 className="text-xl text-gray-600">
                    {" "}
                    {place.groupSize} People{" "}
                  </h1>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />
                <div className="md:flex justify-around">
                  <h1 className="text-2xl"> Fee per person :</h1>
                  <h1 className="text-xl text-gray-600"> {place.fee} Rs. </h1>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />

                {/* List Details */}

                {/* Included */}

                <div className="md:flex ">
                  <h1 className="text-2xl  md:w-[40%] my-5">
                    {" "}
                    Price Includes :{" "}
                  </h1>
                  <div className="w-full  px-10 flex  flex-col gap-y-4">
                    {place.included.map((item) => (
                      <div className="flex gap-4" key={item}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-blue-500 font-semibold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />

                {/* Highlights */}

                <div className="md:flex ">
                  <h1 className="text-2xl  md:w-[40%] my-5"> Highlights : </h1>
                  <div className="w-full  px-10 flex  flex-col gap-y-4">
                    {place.highlights.map((item) => (
                      <div className="flex gap-4" key={item}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-blue-500 font-semibold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />

                {/* Requirements */}
                <div className="md:flex ">
                  <h1 className="text-2xl  md:w-[40%] my-5"> Requirements: </h1>
                  <div className="w-full  px-10 flex  flex-col gap-y-4">
                    {place.requirements.map((item) => (
                      <div className="flex gap-4" key={item}>
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
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />

                {/* Things to Keep In Mind */}

                <div className="md:flex ">
                  <h1 className="text-xl  md:w-[40%] my-5">
                    {" "}
                    Things to Keep in Mind{" "}
                  </h1>
                  <div className="w-full  px-10 flex  flex-col gap-y-4">
                    {place.thingstokeepinMind.map((item) => (
                      <div className="flex gap-4" key={item}>
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
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-1 border-gray-300 my-5 md:my-8 " />
                <h2 className="text-4xl mb-10 text-center "> Gallery </h2>

                <ImageGallery
                  items={place.gallery.map((image) => ({
                    original: image,
                    thumbnail: image, // You can set a different thumbnail if needed
                  }))}
                />
              </div>
            </div>

            {/* Right Section For Pc */}
            <div className="mt-10 ml-2 flex flex-col  gap-3 md:absolute top-[280px] right-24 items-center">

              {/* Booking Card Section */}
              <div className="border h-[480px] w-96 shadow-lg">
                <div className="h-32 bg-blue-500 font-poppins text-white flex flex-col justify-center items-center pt-8">
                  <h4>Per Person</h4>
                  <h4 className="text-5xl">{place.fee}Rs</h4>
                </div>

                    {/* Number of People */}
                <div className="h-32 font-poppins flex flex-col justify-center items-center pt-8">
                <h4>Number of People</h4>

                              <div className="flex gap-6">
                <button className='text-2xl ' onClick={() => setNumOfPeopl(Math.max(1, numOfPeople - 1))}> - </button>
                <h4 className="text-5xl">{numOfPeople}</h4>
                <button className='text-2xl' onClick={() => setNumOfPeopl(numOfPeople + 1)}> + </button>
              </div>
                </div>
                
                <div className="h-32 font-poppins flex flex-col justify-center items-center pt-8">
                <h4>Total Bill</h4>         
                <h4 className="text-5xl">{total }</h4>
                </div>

                <div className="h-20  cursorpo  font-poppins text-white flex flex-col justify-center items-center">
                  { !user? 
                  <Link to={'/sign-in'}>
                 <button className='text-2xl bg-blue-500 px-16 py-4 hover:bg-green-400' > Login to book </button>
                  </Link>
                  :
                  <>
                  <button className='text-xl bg-green-500 px-16 py-4 hover:bg-green-400 flex  gap-2' onClick={()=> handleproceedBooking()}> 
                  <FaWhatsapp/>
                  Proceed Booking </button>
                 
                  </>
                }
                </div>

              </div>

                {/* Why Book Us section  */}
                <div className="border border-2 border-gray-300 mt-20   w-96 p-4"> 

                  <h3 className='text-3xl font-poppins my-10 text-center'> Why Book us ?</h3>

                  <div className="flex gap-3 font-poppins text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                   <h3 className='text-lg'> No-hassle best price guarantee </h3>
                  </div>

                  <div className="flex gap-3 font-poppins text-gray-600 my-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>
                   <h3 className='text-lg'> Customer care available </h3>
                  </div>

                  <div className="flex gap-3 font-poppins text-gray-600 my-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-600">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>

                   <h3 className='text-lg'> Hand-picked Tours & Activities </h3>
                  </div>


                  <div className="flex gap-3 font-poppins text-gray-600 my-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-600">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
              </svg>


                   <h3 className='text-lg'> Travel Insurance </h3>
                  </div>

                </div>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
}
