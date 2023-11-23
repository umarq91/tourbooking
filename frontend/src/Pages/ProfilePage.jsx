import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const ProfilePage = () => {
const {user} = useContext(UserContext)

useEffect(()=>{

  const checkAuthentication = async () => {
          
    await new Promise(resolve => setTimeout((resolve),1000));
    setLoading(false);
};

checkAuthentication();

  user ? <Navigate to={"/sign-in"}/> : <Navigate to={"/"}/>
})
  

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage