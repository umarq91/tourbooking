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
          
          if (response.status === 200) {
            const userData = response.data;
   
            setUser(userData);
            setReady(true);
          }
          
        } catch (error) {
          // Handle errors here
          console.log("Backend Not connected properly");
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