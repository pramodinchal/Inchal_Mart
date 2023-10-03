import React from 'react'
import HomeContainer from './HomeContainer';

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>

      <section className='w-full'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl font-semibold capitalize text-gray-700'>
          Our Fresh & Healthy Vegetables
        </p>
      </div>
      </section>
    </div>
  )
}

export default MainContainer;