import React, { useEffect } from 'react'
 
import Card from '../components/Card'
 
import Popular from '../components/Popular/Popular'
import { FaShopify } from 'react-icons/fa'
import { useFilter } from '../contexts/FIterContext'

const Shop = () => {

   
     const {setPage,filterCategory,items,categ} =useFilter()
     
     useEffect(()=>{
       setPage('shop')
     },[])
     
   
  return (
    <div className='w-full min-h-screen '>

        <div className='flex mt-2 items-center justify-center gap-2 '>
          <span className='text-2xl font-bold'>Shop </span>
          <FaShopify 
          className='text-2xl'
          />
        </div>

           <div className='flex flex-wrap gap-4 px-4 py-2 justify-center items-center  md:mt-5 '>
        {categ .map((item, idx) => {
          return <div key={idx} onClick={() => {
            filterCategory(item.name)
          }}>
            <Card
              id={item.id} Name={item.name} image={item.image} />
          </div>
        })}
      </div>

      <div className='m-6 w-full   text-black px-4 py-5 leading-5'>
        <h1 className='text-center text-6xl font-bold'>Trending Product</h1>
      </div>
      <div className='  mt-8 flex flex-wrap items-center gap-6 justify-evenly p-4 '>

        {items.map((item, idx) => (
          <Popular
            key={idx}
            id={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Shop