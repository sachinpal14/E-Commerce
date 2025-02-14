import React, { useEffect } from 'react'
import Popular from '../components/Popular/Popular'
 
import Card from '../components/Card'
import { useFilter } from '../contexts/FIterContext'

const Grocery = () => {


  const { setPage, filterCategory, items, categ } = useFilter()

  useEffect(() => {
    setPage('grocery')
  }, [])


  return (
    <div className=' w-full h-full p-6 flex flex-col space-y-5'>
      <span className='text-center font-bold text-2xl'>Grocery 🍌</span>
      <div className='flex flex-wrap '>
        {categ.map((item, idx) => (
          <div key={idx}
            onClick={() => {
              filterCategory(item.name)
            }}
            className='flex flex-wrap px-4 py-2 justify-between items-center gap-5 '>
            <Card Name={item.name} image={item.image} id={item.id} />
          </div>
        ))}
      </div>

      <div className='flex flex-wrap gap-5 justify-evenly p-6 '>
        {items.map((item, idx) => <  Popular key={idx} name={item.name} id={item.id} price={item.price} image={item.image} />)}
      </div>
    </div>
  )
}

export default Grocery