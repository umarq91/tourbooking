import React, { useEffect } from 'react'

const SeachPage = () => {
  

    useEffect(()=>{


          const param=   new URLSearchParams(window.location.search);
          const query=   decodeURIComponent(param.get('searchTerm'))
      
    },[])


  return <div className="mt-20 flex flex-col md:flex-row font-medium">

    <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
      <form className='flex flex-col gap-8'>
          <div className="flex items-center  gap-2">
            <label className='whitespace-nowrap'> Search Term: </label>
            <input 
            id='searchTerm'
            placeholder='Search....'
            className='border rounded-lg p-3 w-full'
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label> Type : </label>
            <div className="flex gap-2">
                <input type='checkbox' id='all' className='w-5'/>
                <span> All </span>
            </div>
          
            <div className="flex gap-2">
                <input type='checkbox' id='family' className='w-5'/>
                <span> Family </span>
            </div>
           
            <div className="flex gap-2">
                <input type='checkbox' id='friends' className='w-5'/>
                <span> Friends </span>
            </div>
          
            <div className="flex gap-2">
                <input type='checkbox' id='Couple' className='w-5'/>
                <span> Couple </span>
            </div>
            <div className="flex gap-2">
                <input type='checkbox' id='culture' className='w-5'/>
                <span> Culture </span>
            </div> <div className="flex gap-2">
                <input type='checkbox' id='open' className='w-5'/>
                <span> Open </span>
            </div>
          </div>

    <div className="flex gap-5 flex-wrap ">
          {/* Budget */}
          <div className="flex items-center gap-2">
            <label> Budget: </label>
            <select id='budget' className='border rounded-lg p-2'> 
          <option className='' value='all'> No Limit </option>
          <option className='' value='50000'> PKR 50,000 </option>
          <option className='' value='50000'> PKR 25,000 </option>
          <option className='' value='15000'> PKR 15,000 </option>
          <option className='' value='10000'> PKR 10,000 </option>
          <option className='' value='5000'> PKR 5,000 </option>
       </select>
          </div>

          {/* Days */}
          <div className="flex items-center gap-2">
            <label> Days Limit: </label>
            <select id='days' className='border rounded-lg p-2'> 
          <option className='' value='all'> No Limit </option>
          <option className='' value='1'> 1 Day Trip </option>
          <option className='' value='3'> 3 Days trip</option>
          <option className='' value='7'> 7 Days Trip </option>
 
       </select>
          </div>
          </div>

        {/* Button */}
        <button className='bg-slate-700 hover:opacity-95 text-white p-3 rounded-lg'>
SEARCH
        </button>
         </form>
    </div>


    {/* Listing */}
    <div className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
      <h1> Listing Results </h1>
     
    </div>

  </div>;
}

export default SeachPage