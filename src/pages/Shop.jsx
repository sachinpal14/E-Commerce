import React, { useEffect } from 'react'
import Card from '../components/Card'
import Popular from '../components/Popular/Popular'
import { FaShopify } from 'react-icons/fa'
import { useFilter } from '../contexts/FIterContext'
import { motion } from 'motion/react'

const Shop = () => {


  const iconduration = (i) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -20],
      transition: {
        duration: i * 0.6,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    },

  })


  const { setPage, filterCategory, items, categ ,input,setInput} = useFilter()

  
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {
    setPage('shop')
  }, [])


  return (
    <div className='w-full min-h-screen '>

      <div className='flex mt-2 items-center justify-center gap-2 '>
        <span className='text-2xl font-bold'>Shop </span>
        <FaShopify
          className='text-2xl'
        />
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className='flex flex-wrap gap-4 px-4 py-2 justify-center items-center  md:mt-5 '>
        {categ.map((item, idx) => {
          return <motion.div
            variants={iconduration(idx + 2)}
            initial="initial"
            animate="animate"
            key={idx} onClick={() => {
              filterCategory(item.name)
            }}>
            <Card
              id={item.id} Name={item.name} image={item.image} />
          </motion.div>
        })}
      </motion.div>

      <div className='m-6 w-full   text-black px-4 py-5 leading-5'>
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className='text-center text-6xl font-bold'>Trending Product</motion.h1>
      </div>
      <motion.div className="mt-8 flex flex-wrap items-center gap-6 justify-evenly p-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <motion.div key={idx}>
              <Popular
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-500">
            No products found
          </p>
        )}
      </motion.div>
       
    </div>
  )
}

export default Shop