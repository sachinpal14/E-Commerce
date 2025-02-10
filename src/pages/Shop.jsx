import React, { useState } from 'react'
import { category } from '../Category'
import Card from '../components/Card'
import { dummydata } from '../data'
import Popular from '../components/Popular/Popular'
import { FaShopify } from 'react-icons/fa'

const Shop = () => {

    function filterCategory(category) {
      if(category==="All") setCate(dummydata)
        else{
      let updateData = dummydata.filter(item => item.category==category)
      setCate(updateData)
        }
  
    }
  const [cate,setCate] =useState(dummydata)
  return (
    <div className='w-full min-h-screen '>

        <div className='flex mt-2 items-center justify-center gap-2 '>
          <span className='text-2xl font-bold'>Shop </span>
          <FaShopify 
          className='text-2xl'
          />
        </div>

           <div className='flex flex-wrap gap-4 px-4 py-2 justify-center items-center  md:mt-5 '>
        {category.map((item, idx) => {
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

        {cate.map((item, idx) => (
          <Popular
            key={idx}
            id={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Shop