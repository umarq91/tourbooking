import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AccountNav from '../../Components/Extra/AccountNav'
import MyUploadsCard from '../../Components/Extra/MyUploadsCard'
const MyUploads = () => {

const [tours,setTours] = useState([])
const [loading,setLoading] = useState(false)

    useEffect(()=>{

        const getData =async()=>{
          setLoading(true)
          const {data}=  await axios.get('/api/tour/myTours')
     
         setTours(data)
         setLoading(false)
        }
        getData()
    },[])


  return (
    <div className="bg-gray-200 pt-16 min-h-screen">
      
       <AccountNav/>
       {
        loading? (
          <div> 
            <h1 className='text-center text-xl mt-16'> Loading </h1>
            </div>
        ):(
          <div className='mt-20 max-w-[90vw] md:max-w-[70vw]  mx-auto '>
      
          <h1 className="text-3xl font-poppins font-semibold "> My Uploads </h1>
      
          {
        tours.map((tour) => <MyUploadsCard tour={tour} />)
      }
      
            </div>
        )
       }
   
    </div>
  )
}

export default MyUploads