import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router'
import Navbar from './components/nav/Navbar'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop'
import Cart from './components/cart/Cart'
import Grocery from './pages/Grocery'
import Feedback from './pages/Feedback'
const App = () => {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/shop' element={ <Shop/>}/>
    <Route path='/cart' element={ <Cart/>}/>
    <Route path='grocery' element={<Grocery/>}/>
    <Route path='feedback' element={<Feedback/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>

    </>
  )
}

export default App