import { useEffect, useState ,useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from '../../Components/Context/UserContext'

import LandingPage from "./LandingPage";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";



const IndexPages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [noresult,setNoResult] = useState(false)

  const [test,setTest] = useState('')
 
  const [err,setErr] = useState(false)
    const [isFormCleared, setIsFormCleared] = useState(true);
    const [showsearchLength , setshowSearchLength  ] = useState(false)
    const [searchLength , setSearchLength  ] = useState(0)




    const properties = [

      {type:"Land",
      "pic": "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg"
      ,"description": "Land Choice "},
      
      {type:"House",
      "pic": "https://www.mydomaine.com/thmb/CaWdFGvTH4-h1VvG6tukpKuU2lM=/3409x0/filters:no_upscale():strip_icc()/binary-4--583f06853df78c6f6a9e0b7a.jpeg"
      ,"description": "Your House"},
      {"type":"Hotel",
      "pic": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1"
      ,"description": "Hotel You Stayed in"},
      {"type":"Commercial",
      "pic": "https://designthoughts.org/wp-content/uploads/2022/11/commercial-building-design-elevation-scaled.jpg"
      ,"description": "Commercial House"},
      {"type":"Apartment",
      "pic": "https://urbanmilwaukee.com/wp-content/uploads/2020/10/element-apartments.jpg"
      ,"description": "Apartment you live in"},
      {"type":"Hostel",
      "pic": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/24/cb/33/8-bed-mixed-gender-dorm.jpg?w=700&h=-1&s=1"
      ,"description": "Your Hostel Experience"},
      {"type":"Tour Points",
      "pic": "https://nomadparadise.com/wp-content/uploads/2021/04/pakistan-places-15-1024x683.jpg"
      ,"description": "Tour points Houses"}
  ]

  const Countries = [


      {country:"London","img": "https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium"},
      {country:"Canada","img": "https://palmzeducation.com/wp-content/uploads/2023/08/28-mar-2023-blog.jpg"},
      {country:"Pakistan","img": "https://www.mashreqbank.com/-/jssmedia/Images/UAE/corporate/cibg/CIBG-images-4/global-footprint-2.ashx?h=2329&iar=0&w=3491&hash=73CBD9C61CDAC8F5039EF20A4ED280BD"},
      {country:"Austrailia","img": "https://learnblog.s3.ap-south-1.amazonaws.com/learn/wp-content/uploads/2023/05/09140041/Australia.jpg"},

      {country:"London","img": "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg"},
      
  ]









  async function handleSearch(e) {
    e.preventDefault();

  try {
    const filtered = await axios.post('/search', { query: searchTerm });
    setPlaces(filtered.data);

    if (filtered.data.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false); // Reset noresult state when there are search results
      setSearchLength(filtered.data.length);
      setshowSearchLength(true);
    }
  } catch (error) {
    console.error("Error occurred during search:", error);
  }
  }
  

  async function handleOnChangeSearch(e) {
   
    
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  
    if (newSearchTerm === '') {
      setNoResult(false)
      setIsFormCleared(true)
    }
  console.log(searchTerm);
  }

  return (
    <>

 <div className="">

     <LandingPage/>



<br/>
   
{/*   
<form onSubmit={handleSearch}> 
<div class=" ">
      <div class="container  bg-gray-200  flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mx-2 text-xl ">Search </h1>

      
      <div class="relative w-9/12">
      
      <input type="text" class=" w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" value={searchTerm} onChange={handleOnChangeSearch} placeholder="Country , City , Location or Area "/>
      
      <div class="absolute top-4 right-3">
      <button type="submit" class="fa fa-search text-gray-400 text-2xl -mt-2 z-20 hover:text-gray-500"></button>
      </div>
      
      </div>
      
      
      </div>
      {showsearchLength && 
        <div class=" ">
        <div class="text-2xl w-full font-black  text-black flex justify-center ">Results Matched : <span className="text-red-500"> {searchLength} </span>  </div>
        </div>
      }
      
      </div>
      </form>  
    */}

    
<main className="max-w-7xl mx-auto px-6 sm:px-16">
<section className="pt-6">
  <h2 className="text-4xl font-semibold pb-3 text-black"> Explore Properties </h2>

 
              {/* Pull some Data from the Server */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
    {properties?.map((item) => (
      <div key={item.pic}>
     <SmallCard pic={item.pic} type={item.type} description={item.description}/> 
      </div>
    ))}
    </div>
  </section>



          <section className="">
            <h2 className="text-4xl font-semibold pt-6 mt-6  text-black"> Look Anywhere </h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3  -ml-3">
              {
                Countries?.map(item => (
                  <MediumCard key={item.img} img={item.img} country={item.country} />
                ))}
            </div>
          </section>
        </main>
    


     </div>
    </>
  );
}

export default IndexPages;
