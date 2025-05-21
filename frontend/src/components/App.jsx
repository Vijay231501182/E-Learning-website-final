//import { useState } from 'react'
import { Page1, Page2, Page3 } from './os/Pages'
import '../styles/App.css'
import HeaderNew from './Header/HeaderNew'
import Navbar from './Navbar'
//import { useNavigate } from "react-router-dom";
import Courses from './courses/Courses'

function App() {

  return (
    <>
      <HeaderNew />
      <Courses />
    </>
  )
}

export default App




