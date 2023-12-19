import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Card from "../Components/Extra/Card"
  const TourPage = () => {
    const navigate = useNavigate()
    const [loading,setloading] = useState(false);
    const [data,setData] = useState([])

    const [sidebarData,setSidebarData] = useState({
      searchTerm:'',
      type:'all',
      days:'nolimit',
      budget:'nolimit'
    })

      useEffect(() => {
        const param = new URLSearchParams(window.location.search);
    //    const query = decodeURIComponent(param.get("searchTerm"));
    const typefromURL = param.get("type");
    const budgetUrl = param.get("budget");
    const daysUrl = param.get("days");
 

    if ( typefromURL || budgetUrl || daysUrl) {
      setSidebarData({
        type: typefromURL || 'all',
        budget: budgetUrl || 'nolimit', // Corrected parameter name
        days: daysUrl || 'nolimit',
      });
    }


    const searchQuery = param.toString()
    console.log(searchQuery);

    const fetchListing = async () => {
      setloading(true)
      try {
        const response = await axios.get(`api/tour/alltours?${searchQuery}`);
        // Handle the response data as needed
        setData(response.data)
        setloading(false)
  
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };

fetchListing()
    
   
      },[window.location.search]);

      
      const handlechange = (e) => {
      
        const { id, type, value, checked } = e.target;
     

        if (id === 'budget' || id === 'days' || id==='type') {
          setSidebarData({ ...sidebarData, [id]: e.target.value });
        }
      };

      
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        const urlParams = new URLSearchParams();
        // Add other parameters as needed
        urlParams.set('type', sidebarData.type);
        urlParams.set('days', sidebarData.days);
        urlParams.set('budget', sidebarData.budget);
      
      const searchQuery = urlParams.toString();
      navigate(`/tours?${searchQuery}`)
      };
      


    return <div className="mt-11 flex flex-col  font-medium ">

      <div className="p-2 lg:p-7 border-b-2 md:border-r-2 ">
        <form onSubmit={handleSubmit} className='flex flex-wrap  gap-3'>

            {/* <div className="flex gap-2 flex-wrap items-center">
              <label> Type : </label>
              <div className="flex gap-2">
                  <input type='checkbox' id='all' className='w-5' onChange={handlechange} checked={sidebarData.type === 'all'}/>
                  <span> All </span>
              </div>
            
              <div className="flex gap-2">
                  <input type='checkbox' id='family' className='w-5' onChange={handlechange} checked={sidebarData.type === 'family'}/>
                  <span> Family </span>
              </div>
            
              <div className="flex gap-2">
                  <input type='checkbox' id='friends' className='w-5' onChange={handlechange} checked={sidebarData.type === 'friends'}/>
                  <span> Friends </span>
              </div>
            
              <div className="flex gap-2">
                  <input type='checkbox' id='couple' className='w-5' onChange={handlechange} checked={sidebarData.type === 'couple'}/>
                  <span> Couple </span>
              </div>
              <div className="flex gap-2">
                  <input type='checkbox' id='culture' className='w-5' onChange={handlechange} checked={sidebarData.type === 'culture'}/>
                  <span> Culture </span>
              </div> <div className="flex gap-2">
                  <input type='checkbox' id='open' className='w-5' onChange={handlechange} checked={sidebarData.type === 'open'}/>
                  <span> Open </span>
              </div>
            </div> */}

      <div className="flex gap-2 flex-wrap ">

      <div className="flex items-center gap-2">
              <label> Type: </label>
              <select id='type' className='border rounded-lg p-2' onChange={handlechange} > 
            <option className='' value='all'> All </option>
            <option className='' value='friends'> Friends </option>
            <option className='' value='family'> Family </option>
            <option className='' value='couple'> Couple </option>
            <option className='' value='culture'> Culture </option>
            <option className='' value='open'> Anyone </option>
        </select>
            </div>


            {/* Budget */}
            <div className="flex items-center gap-2">
              <label> Budget: </label>
              <select id='budget' className='border rounded-lg p-2' onChange={handlechange} > 
            <option className='' value='nolimit'> No Limit </option>
            <option className='' value='50000'> PKR 50,000 </option>
            <option className='' value='25000'> PKR 25,000 </option>
            <option className='' value='15000'> PKR 15,000 </option>
            <option className='' value='10000'> PKR 10,000 </option>
            <option className='' value='5000'> PKR 5,000 </option>
        </select>
            </div>

            {/* Days */}
            <div className="flex items-center gap-2">
              <label> Days Limit: </label>
              <select id='days' className='border rounded-lg p-2'  onChange={handlechange} > 
            <option className='' value='nolimit'> No Limit </option>
            <option className='' value={1}> 1 Day Trip </option>
            <option className='' value={3}> 3 Days or less</option>
            <option className='' value={7}> 7 Days or less</option>
  
        </select>
            </div>
            </div>

          {/* Button */}
          <button className='bg-gray-800 w-1/3 md:w-1/5 hover:opacity-95 text-white p-2 rounded-lg'>
 Filter
          </button>
          </form>
      </div>


        <span className='font-poppins text-1xl text-center   tracking-[1px] text-red-600'> {data.length===1? data.length + ' Tour Result' : data.length + ' Tour Results' }  </span>
      {/* Listing */}
      <div className="text-3xl font-semibold border-b-1 p-3  flex-1 min-h-screen flex flex-col">
        {
          data.length > 0 &&
          <h1 className='font-poppins text-3xl text-center  tracking-[1px]'> TOURS </h1>
        }


        {loading && (
          <h1 className='font-semibold text-3xl text-center mt-10 font-poppins'> Loading ....</h1>
        )}

        {data.length==0 && !loading && (
          <h1 className='font-semibold text-3xl text-center w-full mt-10 font-poppins'>No Results Found</h1>
        )}

<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   md:px-14 p-4">
{!loading && data.length > 0 && 

  data.map((item) => (
    <Card key={item.id} tour={item} />
  ))
}
  </div>


      </div>
    </div>;
  }

  export default TourPage