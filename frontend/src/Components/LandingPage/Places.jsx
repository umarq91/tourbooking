import axios from "axios";
import { useEffect, useState ,useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from '../../Components/Context/UserContext.jsx'


import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment'




const PlacesData = ({places}) => {
    // const {places,setPlaces} = useContext(PlaceContext)
    const {user,setUser} = useContext(UserContext);
    





    const notLiked=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
    
    const liked = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
    </svg>
    
    const disLiked= <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
    </svg>
    
    
    const solidDisliked = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
    <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
    </svg>
    
    const handleLike = async (placeId) => {
        if (!user) {
          toast.error("This action is allowed for logged-in users only");
          return;
        }
      
        try {
          const response = await axios.post(`/places/${placeId}/like`, { placeId, userId: user._id });
      
          setPlaces((prevPlaces) =>
            prevPlaces.map((place) => {
              if (place._id === placeId) {
                // If the user has already disliked the post, remove it from dislikes
    
                const isDisliked = place.dislikes.includes(user._id);
                
                return {
                  ...place,
                  likes: isDisliked ? [...place.likes, user._id] : response.data.likes,
                  dislikes: isDisliked ? place.dislikes.filter((id) => id !== user._id) : place.dislikes,
                };
              }
              return place;
            })
          );
        } catch (error) {
          console.log(error);
        }
      };
     
    const handleDislike = async (placeId) => {
      if (!user) {
        toast.error("This action is allowed for logged-in users only");
        return;
      }
    
      try {
        const response = await axios.post(`/places/${placeId}/dislike`, { placeId, userId: user._id });
       {console.log(response.data);}
        setPlaces((prevPlaces) =>
          prevPlaces.map((place) => {
            if (place._id === placeId) {
              const isLiked = place.likes.includes(user._id);
              return {
                ...place,
                dislikes: isLiked ? [...response.data.dislikes, user._id] : response.data.dislikes,
                likes: isLiked ? place.likes.filter((id) => id !== user._id) : place.likes,
              };
            }
            return place;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    
  
      const Likes = ({ place }) => {
        if (!user) {
          return <div className="truncate">{notLiked}{place.likes.length}</div>;
        } else {
          if (place.likes.includes(user._id)) {
            return (
              <div className="flex">
                {liked} <span className=""> {place.likes.length} </span>
              </div>
            );
          } else {
            return (
              <div className="flex">
                {notLiked} <span className="">{place.likes.length} </span>
              </div>
            );
          }
        }
      };   
      const Dislikes = ({ place }) => {
        if (!user) {
          return <div className="truncate text-red-600 ">{disLiked}  {place.dislikes.length}</div>;
        } else {
          if (place.dislikes.includes(user._id)) {
            return (
              <div className="flex">
                {solidDisliked} <span className="text-red-600">{place.dislikes.length} </span>
              </div>
            );
          } else {
            return (
              <div className="flex">
                {disLiked} <span className="text-red-600">  {place.dislikes.length} </span>
              </div>
            );
          }
        }
      };
    

    return ( <>
    
    <div className="px-4 sm:px-6 lg:px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
     
        {places.length > 0 &&
          places.map((place) => (
            <div
              className="bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700"
              key={place._id}
            >
    <a href="#">
        <img className="rounded-t-lg" src={'http://localhost:4000/uploads/'+place.photos?.[0]} alt="" />
    </a>
    <div className="px-3">
          <div className="py-2"> 
            <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">{place.city + ' , '+ place.country}</h5>
       
        <p className=" font-normal truncate text-gray-700 dark:text-gray-400">Location : <span className="font-bold">{place.location} </span></p>
        <p className="mb-2 text-gray-400 truncate"> {place.extraInfo} </p>
        </div>
        <Link   to={'/place/'+place._id} key={place.id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>


        <div className="pt-2 mb-2 flex flex-between">
  <button className="bg-white mt-10 text-blue-700" onClick={() => handleLike(place._id)}>
    <Likes place={place} />
  </button>
  <button className="bg-white mt-10 text-blue-700 px-4" onClick={() => handleDislike(place._id)}>
    <Dislikes place={place} />
  </button>


  <div className="flex-grow"></div> {/* This will push the <h1> to the right */}
  <h1 className="self-end">posted {moment(place.createdAt).fromNow()}</h1>
</div>

            
    
  
   
<Toaster/>
</div> 
  </div> 
        
      ))}
      
      </div>
    </> );
}

export default PlacesData;