import React, { useEffect, useState ,useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'

import Card from "../../Components/Extra/Card";
import Hero from "../../Components/Layout/Hero";
import ReactSlick from "./AttractionsSlider";
import SearchBar from "./SearchBar";

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


        {/* Most Viewed */}
        <section className="mt-10 max-w-screen-2xl mx-auto">
  <h1 className="text-center text-3xl font-poppins  mt-4 relative">
    <div className="bg-green-500 inline-block p-2 px-4 text-white font-bold">
      Most Viewed Tours
    </div>
  </h1>
    <p className="text-lg font-poppins mb-4 text-center"> Take a Look At Most Viewed Tours</p>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:px-14 p-4">
    <Card />
    <Card />
    <Card />
  </div>
</section>

       
          {/* Upcoming */}
          <section className="mt-10 w-full p-2">
          <h1 className="text-center text-3xl font-poppins  mt-4 relative">
    <div className="bg-green-500 inline-block p-2 px-4 text-white font-bold">
    UpComing Tours
    </div>
  </h1>
    <p className="text-lg font-poppins mb-4 text-center"> Take a Look At Upcoming Tours</p>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 md:px-14 p-4">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />

  </div>
</section>
      </div>
    </>
  );
}

export default IndexPages;