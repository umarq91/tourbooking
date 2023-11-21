import React, { useState } from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import SignUpPage from './Pages/auth/SignUpPage';
import SignIn from './Pages/auth/SignInPage.jsx';
import axios from 'axios';
import UserContextProvider from './Context/UserContext.jsx';
import IndexPages from "./Pages/LandingPage/IndexPages.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Layout/Navbarr.jsx';
import Header from './Components/Layout/Navbar.jsx';
axios.defaults.baseURL= "http://127.0.0.1:4000"
axios.defaults.withCredentials= true
const App = () => {

  return (
    <UserContextProvider>

<BrowserRouter>
<Navbarr  />
      <Routes>
        <Route path="/" element={<IndexPages />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/sign-in" element={<SignIn />}/>

          
          
     
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
