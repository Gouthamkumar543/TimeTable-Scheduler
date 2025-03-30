import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar_1 from './Components/NavBar/NavBar'
import LogIn from './Components/LogIn/LogIn'
import SignUp from './Components/SignUp/SignUp'

const App = () => {
  return (
    <div>
      <NavBar_1 />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  )
}

export default App