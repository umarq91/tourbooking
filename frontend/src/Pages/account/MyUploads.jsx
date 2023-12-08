import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AccountNav from '../../Components/Extra/AccountNav'
import MyUploadsCard from '../../Components/Extra/MyUploadsCard'
const MyUploads = () => {

const [tours,setTours] = useState([])

    useEffect(()=>{

        const getData =async()=>{
          const {data}=  await axios.get('/api/tour/myTours')
     
         setTours(data)
        }
        getData()
    },[])
  return (
    <div className="bg-gray-200 pt-16">
      
       <AccountNav/>
    <div className='mt-20 max-w-[90vw] md:max-w-[70vw]  mx-auto '>
      
    <h1 className="text-3xl font-poppins font-semibold "> My Uploads </h1>

    {
  tours.map((tour) => <MyUploadsCard tour={tour} />)
}

      </div>
    </div>
  )
}

export default MyUploads