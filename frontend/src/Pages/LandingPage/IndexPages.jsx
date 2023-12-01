import React, { useEffect, useState ,useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'

import Card from "../../Components/Extra/Card";
import Hero from "../../Components/Layout/Hero";
import ReactSlick from "./AttractionsSlider";
import SearchBar from "./SearchBar";
import MostViewed from "./MostViewed";
import LatestTours from "./LatestTours";

const IndexPages = () => {
const {user,setUser} = useContext(UserContext)
  const [err,setErr] = useState(false)

  // Data 
  const [mostviewd,setmostviewed] = useState([])

  let handlesubmit = async()=>{
    await axios.get('/api/auth/logout')
  }



    


useEffect(()=>{
  const getData= async()=>{

 const data = await axios.get('/api/tour/mostviewed')
    setmostviewed(data)
  }
},[])


  return (
    <>
      <div className="max-w-full overflow-hidden">
        {/* <div className="coursel md:mb-48 lg:mb-96">
          <CustomCarousel />
        </div> */}

        <Hero/>
        <main className="max-w-7xl mx-auto px-6 sm:px-16">


<section className="my-24 flex justify-center items-center flex-col">
<h2 className="text-4xl font-[600] font-poppins text-center   text-black">
              {" "}
            Where to ?{" "}
            </h2>
            
        <p className="text-center mb-8">
    Explore your Destination
        </p>
  <SearchBar/>
</section>

          <section className="mt-12">
            <h2 className="text-4xl font-[600] font-poppins text-center   text-black">
              {" "}
             Popular Attractions In Pakistan{" "}
            </h2>
            
        <p className="text-center">
    Here are some Cool Attraction point Ideas for your Next Tour
        </p>

               <ReactSlick/>
          </section>

                  
        </main>

     {/* Upcoming */}
     <LatestTours/>
     
        {/* Most Viewed */}

<MostViewed/>

       
     
      </div>
    </>
  );
}

export default IndexPages;