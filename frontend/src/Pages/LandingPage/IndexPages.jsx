import { useEffect, useState ,useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'

import LandingPage from "./Hero";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";

import CustomCarousel from "./Carousel";
import Card from "../../Components/Extra/Card";
import Hero from "../../Components/Layout/Hero";



const IndexPages = () => {
const {user,setUser} = useContext(UserContext)
  const [err,setErr] = useState(false)

  // Data 
  const [mostviewd,setmostviewed] = useState([])

  let handlesubmit = async()=>{
    await axios.get('/api/auth/logout')
  }



    const properties = [

      {type:"Kashmir",
      "pic": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D"
      ,"description": "Kashmir"},
      
      {type:"Fairy Medows",
      "pic": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/9a/7f/e2/caption.jpg?w=700&h=-1&s=1"
      ,"description": "Gilgit"},
      {"type":"Naran Kaghan",
      "pic": "https://historypak.com/wp-content/uploads/2014/03/Narran-Valley.jpg"
      ,"description": "Kaghan Valley"},
      {"type":"Skardu",
      "pic": "https://guidetopakistan.pk/wp-content/uploads/2021/06/skardu1.jpg"
      ,"description": "Skardu"},
      {"type":"Muree",
      "pic": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Sunset_in_hills_-_Holy_Trinity_Church%2C_Murree.jpg"
      ,"description": "Muree"},
      {"type":"Murree",
      "pic": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/24/cb/33/8-bed-mixed-gender-dorm.jpg?w=700&h=-1&s=1"
      ,"description": "Your Hostel Experience"},
     
  ]

  const Countries = [


      {country:"London","img": "https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium"},
      {country:"Canada","img": "https://palmzeducation.com/wp-content/uploads/2023/08/28-mar-2023-blog.jpg"},
      {country:"Pakistan","img": "https://www.mashreqbank.com/-/jssmedia/Images/UAE/corporate/cibg/CIBG-images-4/global-footprint-2.ashx?h=2329&iar=0&w=3491&hash=73CBD9C61CDAC8F5039EF20A4ED280BD"},
      {country:"Austrailia","img": "https://learnblog.s3.ap-south-1.amazonaws.com/learn/wp-content/uploads/2023/05/09140041/Australia.jpg"},

      {country:"London","img": "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg"},
      
  ]


useEffect(()=>{
  const getData= async()=>{

 const data = await axios.get('/api/tour/mostviewed')
    setmostviewed(data)
  }
},[])


  return (
    <>
      <div className="bg-gray-100">
        {/* <div className="coursel md:mb-48 lg:mb-96">
          <CustomCarousel />
        </div> */}

        <Hero/>

        <main className="max-w-7xl mx-auto px-6 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-3 text-black font-poppins">
              {" "}
             Popular Attractions In Pakistan{" "}
            </h2>

            {/* Pull some Data from the Server */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {properties?.map((item) => (
                <div key={item.pic}>
                  <SmallCard
                    pic={item.pic}
                    type={item.type}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </section>

{/* Medium Cards for Most Viewd */}
          {/* <section className="">
            <h2 className="text-4xl font-semibold pt-6 mt-6  text-black">
              {" "}
             Most Viewed Tours{" "}
            </h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3  -ml-3">
              {Countries?.map((item) => (
                <MediumCard
                  key={item.img}
                  img={item.img}
                  country={item.country}
                />
              ))}
            </div>
          </section> */}


           
            
        </main>


        {/* Most Viewed */}
        <section className="mt-10 w-full p-2">
  <h1 className="text-center text-3xl font-poppins font-semibold my-4 relative">
    <div className="bg-green-500 inline-block p-2 px-4 text-white">
      Most Viewed Tours
    </div>
    <h3 className="text-lg"> Take a Look At Most Viewed Tours</h3>
  </h1>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 md:px-14 p-4">
    <Card />
    <Card />
    <Card />
  </div>
</section>

       
          {/* Upcoming */}
          <section className="mt-10 w-full p-2">
  <h1 className="text-center text-3xl font-poppins font-semibold my-4 relative">
    <div className="bg-green-500 inline-block p-2 px-4 text-white">
      UpComing Tours Tours
    </div>
    <h3 className="text-lg"> Take a Look At Most Viewed Tours</h3>
  </h1>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 md:px-14 p-4">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />

  </div>
</section>
      </div>
    </>
  );
}

export default IndexPages;
