import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { SiShopify } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from 'react-router';


const Navbar = () => {
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
            className='bg-white outline-none w-full rounded-l-full text-black px-2 py-1 placeholder:text-base'

          />
          <button className='cursor-pointer bg-white rounded-r-full text-black px-4 py-2 text-xl'>
            <IoSearch />
          </button>
        </form>
        <div className=' relative'>
          <GiShoppingCart
            className='text-2xl md:text-3xl'
          />
          <span className='absolute top-[-10px] right-[-5px]'>0</span>
        </div>
      </div>

    <div className='bottomNav bg-gray-800 flex items-center justify-center gap-3 px-2 py-1 text-white'>

   <Link  to='/'>Home</Link>
   <Link to='shop'>Shop</Link>
   <Link to=''>Contact Us</Link>
   <Link to=''>Help</Link>

    </div>
    </div>
  )
}

export default Navbar