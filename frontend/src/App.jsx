import React, { useState } from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import SignUpPage from './Pages/auth/SignUpPage';
import HomePage from "./Pages/HomePage.jsx"
import SignIn from './Pages/auth/SignInPage.jsx';
import axios from 'axios';
import UserContextProvider from './Components/Context/UserContext.jsx';
import IndexPages from "./Pages/LandingPage/IndexPages.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
axios.defaults.baseURL= "http://127.0.0.1:4000"
axios.defaults.withCredentials= true
const App = () => {

  return (
    <UserContextProvider>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPages />}/>
        <Route path="/register" element={<SignUpPage />}/>
        <Route path="/register" element={<SignIn />}/>

          
          
     
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
