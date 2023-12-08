import axios from 'axios'
import React, { useEffect } from 'react'
import AccountNav from '../../Components/Extra/AccountNav'
const MyUploads = () => {

    useEffect(()=>{

        const getData =async()=>{
          const data=   await axios.get('/api/tour/myTours')
          console.log(data);
        }
        getData()
    },[])
  return (
    <div className='mt-20 max-w-[90vw] mx-auto'>
       <AccountNav/>
      MyUploads</div>
  )
}

export default MyUploads