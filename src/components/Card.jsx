import React from 'react'
const Card = ({id,Name,image}) => {
  return (
    <div  
    key={id}
    className='w-52 h-64 rounded-lg px-4 py-2  hover:shadow-lg hover:shadow-black transition-all duration-300 flex flex-col gap-4 items-center text-2xl text-center indent-1'>
        <img 
        className='w-full h-[70%] object-center object-cover '
        src={image} alt="" />
        <h1>{Name}</h1>
    </div>
  )
}

export default Card