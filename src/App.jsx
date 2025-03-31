import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar_1 from './Components/NavBar/NavBar';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import "./App.css"
import DashBoard from './Components/DashBoard/DashBoard';


const App = () => {
  return (
    <div>
      <NavBar_1 />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<DashBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
