import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
export const TourDetailPage = () => {
    const {name} = useParams()
   const params =  decodeURIComponent(name.replace(/-/g, ' '))
   const [detail,setDetail] = useState({})

  useEffect(()=>{
const getdata = async()=>{

  const {data} = await  axios.get('/api/tour/'+params)
console.log(data);
}
getdata()
  },[])

  return (
    <div className='mt-16'>
        TourDetailPage
        </div>
  )
}
