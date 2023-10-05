import React, { useState } from 'react'
import {PiIceCreamLight} from 'react-icons/pi'
import { categories } from '../utils/data';

const MenuContainer = () => {
 
  const[filter, setFilter] = useState("icecream");

  return (
    <section className='w-full my-6 text-orange-700' id="menu">
    <div className='w-full flex flex-col items-center justify-center'>
    <p className="text-2xl font-semibold capitalize text-gray-900 relative
         after:absolute after:rounded-lg after:content after:w-32 after:h-1 after:-bottom-2
         after:left-0 after:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
         ease-in-out duration-100 mr-auto">
         Grocery List  
        </p>
        <div className='w-full h-50 m-10 flex flex-auto items-center justify-start gap-4  flex-row overflow-x-scroll scrollbar-none mb-5'>
       {categories && categories.map(category =>(
        <div key={category.id} className='group bg-white px-9 py-9 hover:bg-red-400  w-24 max-h-[100px] max-w-[110px] duration-150 transition-all ease-in-out cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center mb-14'>
        <div className='w-10 h-10 rounded-full px-3 py-3  bg-gray-200 flex flex-col items-center justify-center'>
          <PiIceCreamLight className=' text-gray-800 group-hover:text-gray-900 text-lg '/>
        </div>
        <p className='text-xs text-gray-600 group-hover:text-white flex flex-col items-end justify-end'>{category.name}</p>
       </div>
       ))}
        </div>
    </div>
    </section>
  )
}

export default MenuContainer; 


