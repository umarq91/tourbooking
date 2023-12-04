import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccountNav from '../../Components/Extra/AccountNav'
import axios from 'axios';
import {UserContext} from "../../Context/UserContext"
export const Profile = () => {
  const {user} = useContext(UserContext)
  
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email, // Assuming user object has email property
    password:'',
    profile:user.profile, // You might want to initialize it with an empty string or user.password if it exists
  });
    const [loading,setloading] = useState(false)
   console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

    const handleUpdate=(e)=>{
e.preventDefault()
axios.put(`/api/user/update/${user._id}`,{username:formData.username,password:formData.password,email:formData.email,profile:formData.profile})
    }


    const handlelogout = ()=>{
      const res =  axios.get('/api/auth/logout');
      window.location.reload()
   
     }


  return (
    <div className='mt-20'>
        
<AccountNav/>
        <div className="picture">
        </div>
        <div className=' max-w-lg mx-auto '>
      <form onSubmit={handleUpdate} className='flex flex-col gap-4'>
        <img className='h-24 w-24 self-center rounded-full' src={user.profile} />
        <input
          type='username'
          placeholder='username'
          value={formData.username}
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          value={formData.email}
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
         
          className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
         {loading ? 'Loading...': 'Update'}
        </button>

      </form>
      <div className='flex gap-2 mt-5 w-full '>
      <button
         onClick={handlelogout}
         className='bg-red-700   text-white p-3 rounded-lg  hover:opacity-80 disabled:opacity-80 ml-auto'
       >
        {loading ? 'Loading...': 'Logout'}
       </button>
      </div>
      {/* <p className='text-red-700 mt-5'>
        {error&& errorr }
      </p> */}
    </div>
    </div>
  )
}
