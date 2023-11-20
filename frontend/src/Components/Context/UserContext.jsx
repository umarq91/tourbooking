import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready,setReady] = useState(false)
  const [loaading,setLoading ] = useState(true)

  useEffect(()=>{
    if(!user){

      const getUser =async()=>{
        try {
          const response = await axios.get('/api/auth/profile');
          const userData = response.data;
  
          setUser(userData);
          console.log(userData); // Use userData here, not user
          setReady(true);
          setLoading(false); // Assuming you want to stop loading when the data is ready
        } catch (error) {
          // Handle errors here
          console.error('Error fetching user data:', error);
          setLoading(false); // Stop loading even if there's an error
        }
      }
      getUser()

    
    }
  },[])


  return (
   
   (<UserContext.Provider value={{ user, setUser,ready }}>
      {children}
    </UserContext.Provider>)
  );
}