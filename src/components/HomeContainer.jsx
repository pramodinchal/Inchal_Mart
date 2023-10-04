import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from  '../img/heroBg.png'
import { mainData } from '../utils/data'


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 medium:grid-cols-2 gap-2 w-full' id="home">
    <div className=' flex-1 flex flex-col items-start justify-center gap-6'>
     <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
     <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
      <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
        <img src={Delivery} className='w-full h-full object-contain' alt='delivery'/>
      </div>
     </div>
     <p className='text-[2.5rem] Large:text-[4.5rem] font-bold tracking-wide text-black'>The Fastest Delivery in <span className='text-orange-500 text-[3rem] Large:text-[5rem]'>Your City</span></p>
     <p className='text-bas text-gray-500 text-center medium:text-left medium:w-[80%]'>In this free course, we are going to develop a full stack food delivery application using Reactjs, Firebase, Framer motion, Tailwind css. This projects allows to the user to add new items and to maintain all the things over the firestore cloud database</p>
     <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full medium:w-auto px-4 py-2 rounded-lg hover:shadow-2xl transition-all ease-in-out duration-100'>Order Now</button>
    </div>
    <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} className='ml-auto h-420 w-full Large:w-auto Large:h-650' alt='hero-bg'/>

        <div className=' h-full absolute top-0 flex items-center justify-center px-15 py-6 gap-4 flex-wrap'>
          {mainData && mainData.map(n=>(
            <div key={n.id} className='w-24   Large:w-190 min-w-[240px] min-h-[220px] p-6 pb-2 bg-gray-300 bg-opacity-40 from-gray-400 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
            <img src={n.imageSrc} className='w-16 Large:w-30 -mt-8 Large:-mt-18' alt='IceCream'/>
            <p className='text-[14px] Large:text-xl font-semibold text-gray-700 flex flex-col'>{n.name}</p>
            <p className='text-[10px] Large:text-xs break-normal font-semibold text-gray-500 flex flex-col my-1 Large:my-2'>{n.desc}</p>
            <p className='text-sm font-semibold text-gray-800'><span className='text-xs text-red-600'>Rs:</span>{n.price}</p>
          </div>
          ))}
        </div>
    </div>
  </section>
  )
}

export default HomeContainer;