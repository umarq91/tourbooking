import React from 'react'

const Hero = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <video
      className='w-full'
      style={{ objectFit: 'cover' }}
      src='https://res.cloudinary.com/dpqjhzvar/video/upload/v1701019751/Untitled_video_-_Made_with_Clipchamp_2_k8hnx3.mp4'
      muted
      autoPlay
      loop
    />
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '10',
        width: '100%',
        textAlign: 'center',
        boxShadow:"-moz-initial"
      }}
    >
      <h1 className='font-bold font-poppins text-white text-5xl md:text-6xl lg:text-7xl'>Explore Pakistan</h1>
      <p className='font-medium font-poppins text-white text-xl md:text-2xl mt-1'>With  <span className='text-orange-400 font-bold'> World Of Adventure </span>Tour Agency</p>
   
    </div>
  </div>
  
  )
}

export default Hero