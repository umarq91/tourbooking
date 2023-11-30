import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
const [errorr,setErrorr] = useState('')



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
  
      const data = response.data; // assuming your response object has a 'data' property
  
      if (data.success === false) {
        console.log("errorrrrrrr");
        setError(true);
        setLoading(false);
        setErrorr(data.message); // Set the error message here
      } else {
        window.location.href = '/'; // Redirect to the index page on successful login
      }
  
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorr(error.response.data.message || "something went Wrong");
    }
  };
  
  

  return (
    <div className='p-3 max-w-lg mx-auto mt-20'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
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
         
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
         {loading ? 'Loading...': 'Sign In'}
        </button>
        {/* <OAuth /> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error&& errorr }
      </p>
    </div>
  );
}