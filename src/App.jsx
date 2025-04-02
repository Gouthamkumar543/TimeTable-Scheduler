import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar_1 from './Components/NavBar/NavBar';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import "./App.css"
import DashBoard from './Components/DashBoard/DashBoard';


const App = () => {
  const [userLoggedIn,setUserLoggedIn]=useState(false)
  return (
    <div>
      <NavBar_1 userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn setUserLoggedIn={setUserLoggedIn}/>} />
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
