import React, { useEffect } from 'react'

const SeachPage = () => {
  

    useEffect(()=>{


          const param=   new URLSearchParams(window.location.search);
          const query=   decodeURIComponent(param.get('searchTerm'))
         console.log(query);
    },[])


  return (
    <div className='mt-20'>
        SeachPage</div>
  )
}

export default SeachPage