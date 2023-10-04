import React from 'react'

const MenuContainer = () => {
  return (
    <section className='w-full my-6 text-orange-700' id="menu">
    <div className='w-full flex flex-col items-center justify-center'>
    <p className="text-2xl font-semibold capitalize text-gray-900 relative
         after:absolute after:rounded-lg after:content after:w-32 after:h-1 after:-bottom-2
         after:left-8 after:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
         ease-in-out duration-100">
         Grocery List  
        </p>
    </div>
    </section>
  )
}

export default MenuContainer;


