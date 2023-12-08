import React from 'react'
import TourForm from '../../Components/Forms/TourForm'
import AccountNav from '../../Components/Extra/AccountNav'
const AddTour = () => {
  return (
    <div className='mt-20 max-w-[90vw] mx-auto'>
      <AccountNav/>
      <h1 className='text-center text-4xl font-semibold font-poppins'> 
        Tour Form  </h1>
        <TourForm/>
    </div>
  )
}

export default AddTour