import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from  '../img/heroBg.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 medium:grid-cols-2 gap-2 w-full' id="home">
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
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

        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 '>
          <div className='w-300 px-5 py-1 bg-red-700'></div>
        </div>
    </div>
  </section>
  )
}

export default HomeContainer