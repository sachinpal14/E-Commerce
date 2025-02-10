import React from 'react'
import Minicard from '../Minicard.jsx/Minicard'
import { useSelector } from 'react-redux'

const Cart = () => {

  let items=useSelector(state=>state.cart)
  return (
    <div className='h-full w-full absolute bg-white  top-0 right-0 px-6 py-4'>
      {items.length==0?<div className='h-full w-full text-7xl flex items-center justify-center font-bold '> <h1>Empty Cart</h1></div>: items.map((item,idx)=><Minicard  key={idx} price={item.price} image={item.image} name={item.name} id={item.id} qty={item.qty} />)}
      
    </div>
  )
}

export default Cart