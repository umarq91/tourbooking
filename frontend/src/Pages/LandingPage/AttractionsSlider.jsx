import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../Components/Extra/Card";
import { RiSearchLine , RiArrowRightSLine  ,RiArrowLeftSLine} from "react-icons/ri";
import { Link } from "react-router-dom";

const Slick = () => {

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

    const NextArrow=({onClick})=>{
        return(
            <div onClick={onClick} className="text-2xl hover:cursor-pointer hover:scale-105  bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 -right-3 z-10 hover:bg-slate-10">
                <RiArrowRightSLine/>
            </div>
        )
      }

      const PrevArrow = ({onClick}) => {
        return (
            <div onClick={onClick} className="text-2xl bg-white hover:cursor-pointer hover:scale-105  p-3 inline-block rounded-full shadow-md absolute top-1/2 -left-3 z-10 hover:bg-slate-10">
                <RiArrowLeftSLine/>
            </div>
        );
    }

    const settings = {
        accessibility:true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    autoplay:true,
    speed: 2000,
    slidesToScroll: 2,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


 
  return (
    <div className="max-container padding-container  ">
        <div className="m-auto w-[90%]"> 
      
        <Slider {...settings} >
    {properties.map((item)=>(
        
        
      
        <div key={item.type} className="px-2 overflow-hidden border border-slate-200 group py-8">
            <div className="overflow-hidden relative">
                <img src={item.pic} className="h-[500px] w-[510px] object-cover hover:scale-105 hover:rotate-2 transition-all  duration-700"/>
                <Link to={`/search?searchTerm=${item.type}`} className="absolute top-1/2 left-1/2 h-14 w-14 flex  justify-center items-center scale-0 bg-white -translate-x-1/2 -translate-y-1/2    rounded-full  group-hover:scale-100     transition all" 
                ><RiSearchLine/> </Link>
            </div>

<div className="px-5 py-3 bg-white ">
<div className="capitalize text-[17px]  font-[500] font-poppins">{item.type} </div>

<div className="text-gray-500  text-[15px]"> {item.description}</div>
</div>
        </div>
      
      ))}
    </Slider>
      </div>
  </div>
  )
}

export default Slick