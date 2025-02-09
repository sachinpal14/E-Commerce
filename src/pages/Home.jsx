import React from 'react'
import backGif from '../assets/bg0.gif'
import Card from '../components/Card'
import { category } from '../Category'
import Popular from '../components/Popular/Popular'
import { dummydata } from '../data'
const Home = () => {

  return (
    <div className='w-full h-full'>

      <div className="heroImg w-full flex items-center justify-center mt-4 ">
        <img
          className='w-[90%] rounded-lg shadow-lg'
          src={backGif} alt="Main Image Gif" />
      </div>

      <div className='flex flex-wrap gap-4 px-4 py-2 justify-center items-center  md:mt-5 '>
        {category.map((item, idx) => {
          return <Card
            key={idx}
            id={item.id} Name={item.name} image={item.image} />
        })}
      </div>

      <div className='m-6 w-full bg-black text-white px-4 py-5 leading-5'>
      <h1 className='text-center text-6xl font-bold'>Popular Technologies</h1>
      </div>
      <div className=' mt-8 flex flex-wrap items-center gap-6 justify-evenly p-4 '>

        {dummydata.map((item,idx)=>(
          <Popular 
          key={idx} id={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
      
    </div>
  )
}

export default Home