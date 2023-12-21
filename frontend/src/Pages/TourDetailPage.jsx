import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'react-image-gallery/styles/css/image-gallery.css'
import axios from "axios"
import ImageGallery from 'react-image-gallery'


export const TourDetailPage = () => {
    const {id} = useParams()
    const images = [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ];
    

  //  const params =  decodeURIComponent(name.replace(/-/g, ' '))
   const [place,setPlace] = useState({})
   const [loading, setLoading] = useState(true);

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

  return (
   <div className='md:mt-16'>
    {loading ? (
        // Display a loading indicator or placeholder while data is being fetched
        <p className='text-4xl font-semibold font-poppins text-center'>Loading...</p>
      ) : (
        // Display the content when data has been fetched
<>


          <div className="relative" >
            <img
              src={place.gallery[0]}
              className="w-full max-h-96 object-cover"
              alt="Tour Gallery"
              style={{ filter: "brightness(0.5)" }}
            />
            <h1 className='absolute bottom-4 text-white text-3xl font-poppins font-semibold px-2
            md:px-12 md:py-6 md:text-5xl
            '> {place.tourname} </h1>
     </div>
    



            {/* Details Section */}
        <div className="mx-8 max-w-screen-xl mx-auto md:flex  ">


            {/* Left Section */}
          <div className="md:w-[70%] font-poppins"> 

                          {/* Duration */}
                          <div className="timing my-16 flex gap-3 font-poppins"> 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-blue-700 w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                          <h3 className='text-xl  '> {place.duration?.days} {place.duration.days>1?  ' Days ': 'Day '} </h3>
                          {place.duration.nights > 0 && (
                          <h3 className='text-xl  '>  ({place.duration?.nights} Nights )</h3>
                        )}

                          </div>

                         

                              <div className="flex gap-2 font-poppins">
                                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-8 h-8  self-center">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg>

                              <h2 className=' text-4xl font-normal  '> Details </h2>
                              </div>


                                {/* More Details */}
                              <div className="descri my-20">

                                        {/* Tour Description */}
                                        <div className="my-16">
                                          <h2 className='text-3xl my-2'> Description </h2>
                                         <p className='text-gray-600'>{place.description}  </p>  
                                        </div>

                              <hr className='border-1 border-gray-300 my-5 md:my-8'/>

                                      <div className="md:flex justify-around">
                                          <h1 className='text-2xl'> Location :</h1>
                                          <h1 className='text-xl text-gray-600'> {place.location} </h1>
                                         </div>

                                         <hr className='border-1 border-gray-300 my-5 md:my-8'/>

                                  <div className="md:flex justify-around">
                                      <h1 className='text-2xl'> Trip type :</h1>
                                      <h1 className='text-xl text-gray-600'> {place.type} </h1>
                                    </div>

                                         <hr className='border-1 border-gray-300 my-5 md:my-8 ' />

                                       
                                        {/* Departure */}
                                         <div className="md:flex justify-around">
                                          <h1 className='text-xl'> Departure/Return :</h1>
                                          <h1 className='text-xl text-gray-600'> {place.departure} </h1>
                                         
                                         </div>

                                         <hr className='border-1 border-gray-300 my-5 md:my-8 ' />

                                         <div className="md:flex justify-around">
                                      <h1 className='text-2xl'> Trip Group Size :</h1>
                                      <h1 className='text-xl text-gray-600'> {place.groupSize} People </h1>
                                    </div>

                                         <hr className='border-1 border-gray-300 my-5 md:my-8 ' />
                                         <div className="md:flex justify-around">
                                      <h1 className='text-2xl'> Fee per person :</h1>
                                      <h1 className='text-xl text-gray-600'> {place.fee} Rs. </h1>
                                    </div>
                                  
                                    <hr className='border-1 border-gray-300 my-5 md:my-8 ' />


                            {/* List Details */}

                              {/* Included */}

                              <div className="md:flex ">
                                 <h1 className='text-2xl  md:w-[40%] my-5'> Price Includes : </h1> 
                                 <div className='w-full  px-10 flex  flex-col gap-y-4'> 
                                  {place.included.map((item)=>(

                                    <div className='flex gap-4' key={item}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6 text-blue-500 font-semibold">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>

                                      {item}
                                      </div>
                                  ))}
                                  </div>
                              </div>

                              <hr className='border-1 border-gray-300 my-5 md:my-8 ' />


{/* Highlights */}

                           <div className="md:flex ">
                                 <h1 className='text-2xl  md:w-[40%] my-5'> Highlights : </h1> 
                                 <div className='w-full  px-10 flex  flex-col gap-y-4'> 
                                  {place.highlights.map((item)=>(

                                    <div className='flex gap-4' key={item}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                       className="w-6 h-6 text-blue-500 font-semibold">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>

                                      {item}
                                      </div>
                                  ))}
                                  </div>
                                  </div>


                                  <hr className='border-1 border-gray-300 my-5 md:my-8 ' />


{/* Requirements */}
            <div className="md:flex ">
                                            <h1 className='text-2xl  md:w-[40%] my-5'> Requirements: </h1> 
                                            <div className='w-full  px-10 flex  flex-col gap-y-4'> 
                                              {place.requirements.map((item)=>(

                                                <div className='flex gap-4' key={item}>
                                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>


                                                  {item}
                                                  </div>
                                              ))}
                                              </div>
                                          </div>


                                    <hr className='border-1 border-gray-300 my-5 md:my-8 ' />

{/* Things to Keep In Mind */}

<div className="md:flex ">
                                 <h1 className='text-xl  md:w-[40%] my-5'> Things to Keep in Mind : </h1> 
                                 <div className='w-full  px-10 flex  flex-col gap-y-4'> 
                                  {place.thingstokeepinMind.map((item)=>(

                                    <div className='flex gap-4' key={item}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                      className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>


                                      {item}
                                      </div>
                                  ))}
                                  </div>
                              </div>



           <hr className='border-1 border-gray-300 my-5 md:my-8 ' />
           <h2 className='text-4xl mb-10 text-center '> Gallery </h2>

           <ImageGallery items={place.gallery.map(image => ({
          original: image,
          thumbnail: image, // You can set a different thumbnail if needed
        }))} />
          
           </div>
                              </div>











                    {/* Right Section For Pc */}
          <div className=""> Right </div>

   

        </div>

       
</>
        )}

    </div>
  )
}
