import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from "../../Components/Extra/Card"
const LatestTours = () => {
    const [data,setData]= useState([])
    useEffect(()=>{


        const  getData = async()=>{
            
         const res =   await  axios.get('/api/tour/latestTours')
       
         setData(res.data)
        }
        getData()
    },[])
  return (
    <div>
    <section className="mt-10 max-w-screen-2xl mx-auto">
<h1 className="text-center text-3xl font-poppins  mt-4 relative">
<div className="bg-green-500 inline-block p-2 px-4 text-white font-bold">
   Latest Posts
    </div>
  </h1>
    <p className="text-lg font-poppins mb-4 text-center"> Take a Look At Latest Upcoming Tours</p>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  md:px-14 p-4 ">

{data.map((tour) => (
 <Card  key={tour.id} tour={tour}/>
 ))}
</div>
</section>

</div>
  )
}

export default LatestTours