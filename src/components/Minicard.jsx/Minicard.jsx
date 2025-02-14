import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {   decreaseQuantity,  removeItem } from '../../redux/shopSlice'
 
 


const Minicard = ({ image, name, price, id, qty }) => {
 let dispatch=useDispatch()

 function handleDelete(qty,id){
   if(qty===1) {
    dispatch(removeItem(id))
   }
   else {
    dispatch(decreaseQuantity(id))
   }
    
    
 }
    

    return (

        <div className=' h-56 mt-5 w-full flex justify-between px-6 shadow-2xl rounded-xl  bg-white '>
            <div id={id} className='h-full w-[70%] py-2 px-8 flex items-center gap-10 rounded-xl '>
                <img
                    className='h-[85%] w-[45%] object-center object-contain rounded-xl'
                    src={image} alt="" />

                <div className='flex flex-col gap-5 text-xl '>
                    <h1 className='font-semibold '>{name}</h1>
                    <h2 className='font-bold'>Rs:{price}/-</h2>
                    <h3 className='font-medium'>Qty:{qty}</h3>
                </div>
            </div>

            <div className='flex flex-col justify-evenly px-4 py-3'>
                <div 
               onClick={()=>{
                
                handleDelete(qty,id)
                
               }}
                className='border-2 rounded-md px-7 py-1 border-red-600 cursor-pointer hover:shadow-[2px_2px_10px_red] transition-all duration-300 active:scale-90'>
                    <MdDeleteOutline className='text-2xl text-red-500' />
                </div>
            </div>

        </div>


    )
}

export default Minicard