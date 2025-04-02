import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar_1 from './Components/NavBar/NavBar';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import "./App.css"
import DashBoard from './Components/DashBoard/DashBoard';
import Carousel_1 from './Components/Carousel/Carousel';
import Card_1 from './Components/Card/Card';
import Accondion_1 from './Components/Accondion/Accondion';
import Footer from './Components/Footer/Footer';


const App = () => {
  const [userLoggedIn,setUserLoggedIn]=useState(false)
  return (
    <div>
      <NavBar_1 userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
      <Routes>
        <Route path='/' element={<><Carousel_1 /> <Card_1 /> <Accondion_1/></>}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>} />
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
