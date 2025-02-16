import React from 'react'
import Minicard from '../Minicard.jsx/Minicard'
import { useSelector } from 'react-redux'
import { RxCross1 } from "react-icons/rx";
 
import { useNavigate } from 'react-router';

const Cart = () => {

let navigate=useNavigate()
  let items = useSelector((state) => state.cart)

  let totalPrice = items.reduce((total, item) => item.qty * (total + item.price), 0)

  


  return (
    <div className='h-full w-full absolute bg-white top-0 right-0 px-6 py-4 '>
      <div
      onClick={()=>{
        navigate(-1)
      }}
      className='flex justify-end '>
      <RxCross1 className='text-2xl cursor-pointer'/>
  
      </div>
      
      <div>
      {items.length == 0 ? <div className='h-full w-full text-7xl flex items-center justify-center font-bold '> <h1 className='text-center'>Empty Cart</h1></div> : items.map((item, idx) => <Minicard key={idx} price={item.price} image={item.image} name={item.name} id={item.id} qty={item.qty} />)}
      {items.length !== 0 && <div className=' mt-4 w-full h-fit flex justify-center items-center flex-col border-t-2 border-t-gray-700'>
        <h1 className='text-xl font-semibold mt-4 '>Total Items:{items.length} </h1>
        <h1 className='text-2xl font-bold mt-4'>Total Rs:{totalPrice}/-</h1></div>}
      </div>

    </div>
  )
}

export default Cart