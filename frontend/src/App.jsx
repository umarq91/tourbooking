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
import AddTour from './Pages/account/AddTour.jsx';
import Navbar from './Components/Layout/Navbar.jsx';
import SearchPage from "./Pages/SeachPage.jsx"
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


    <Route  element={<PrivateRoutes />}>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/account/addtour" element={<AddTour />}/>

    </Route>


          
          
     
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
