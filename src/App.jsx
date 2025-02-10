import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router'
import Navbar from './components/nav/Navbar'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop'
const App = () => {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/shop' element={ <Shop/>}/>
    
   </Routes>
   <Footer/>
   </BrowserRouter>

    </>
  )
}

export default App