import React, { useState } from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import SignUpPage from './Pages/auth/SignUpPage';
import SignIn from './Pages/auth/SignInPage.jsx';
import axios from 'axios';
import UserContextProvider from './Context/UserContext.jsx';
import IndexPages from "./Pages/LandingPage/IndexPages.jsx"
import Header from './Components/Layout/Navbar.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import PrivateRoutes from './Context/PrivateRoutes.jsx';
import TourFormpage from './Pages/account/TourFormPage.jsx';
import Navbar from './Components/Layout/Navbar.jsx';
import SearchPage from "./Pages/SeachPage.jsx"
import { Profile } from './Pages/account/profile.jsx';
import TourPage from './Pages/TourPage.jsx';
import { TourDetailPage } from './Pages/TourDetailPage.jsx';
import MyUploads from './Pages/account/MyUploads.jsx';
import NotFound from './Pages/NotFound.jsx';
axios.defaults.baseURL= "http://127.0.0.1:4000"
axios.defaults.withCredentials= true


const App = () => {

  return (
    <UserContextProvider>

<BrowserRouter>
<Navbar  />
      <Routes>
        <Route path="/" element={<IndexPages />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/tours" element={<TourPage />}/>
        <Route path="/tour/:name" element={<TourDetailPage />}/>




    <Route  element={<PrivateRoutes />}>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/account/profile" element={<Profile />}/>
        <Route path="/account/myuploads" element={<MyUploads />}/>

          {/* Admin Routes */}

          <Route path="/account/tourform/add" element={<TourFormpage />}/>
        <Route path="/account/tourform/:id" element={<TourFormpage />}/>

    </Route>

                  
      
        {/* <Route path="/account/myuploads/update/:id" element={<MyUploads />}/> */}



    <Route path="/*" element={<NotFound/>}/>

          
          
     
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
