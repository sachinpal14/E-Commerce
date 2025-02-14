import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { SiShopify } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from 'react-router';
import {useSelector } from 'react-redux';
 


const Navbar = () => {
let items=useSelector(state=>state.cart)
 



  return (
    <div>
      <div className='topBottom bg-black h-12 w-full text-white flex justify-between items-center gap-2 p-2 md:gap-5 md:px-6 md:py-2'>
      <Link to='/' > <div className='flex justify-between items-center gap-2 md:gap-4'>
          <h1 className='indent-1 md:2xl'>Pikachu</h1>
          <SiShopify className='md:text-3xl' />
        </div>
        </Link> 
        <form className=' w-[60%] rounded-full  flex '>
          <input
            type="text"
            placeholder='Search Items'
            className='bg-white outline-none w-full rounded-l-lg text-black px-2 py-1 placeholder:text-base'

          />
          <button className='cursor-pointer bg-white rounded-r-lg text-black px-4 py-2 text-xl'>
            <IoSearch />
          </button>
        </form>
      <Link to='cart'>
      <div className=' relative'>
          <GiShoppingCart
            className='text-2xl md:text-3xl cursor-pointer'
          />
          <span className='absolute top-[-10px] right-[-5px]'>{items.length}</span>
        </div>
      </Link>
      </div>

    <div className='bottomNav bg-gray-800 flex items-center justify-center gap-3 px-2 py-1 text-white'>

   <Link  to='/'>Home</Link>
   <Link to='shop'>Shop</Link>
   <Link to='grocery'>Grocery</Link>
   <Link to='feedback'>Feedback</Link>

    </div>
    </div>
  )
}

export default Navbar