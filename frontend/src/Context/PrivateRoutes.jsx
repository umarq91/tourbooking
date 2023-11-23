// PrivateRoutes.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './UserContext';

const PrivateRoutes = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Your logic to check for user authentication (e.g., fetching user data from cookies)
        // Once the check is complete, update the loading state
        // For example, you might have an asynchronous function to check authentication
        const checkAuthentication = async () => {
          
            await new Promise(resolve => setTimeout((resolve),1000));
            setLoading(false);
        };

        checkAuthentication();
    }, []); 

    if (loading) {
        // You can render a loading spinner or any other loading indicator
        return <p>Loading...</p>;
    }

    return user ? <Outlet /> : <Navigate to={'/sign-in'} />;
};

export default PrivateRoutes;
