import React from 'react'
import { CreateContainer, Header, MainContainer } from './components/';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence>
    <div className='w-screen h-auto flex flex-col bg-slate-100'>
    <Header/>

    <main className='mt-32  w-full'>
    <Routes>
          <Route path='/*' element={ <MainContainer/>}/>
          <Route path='/createItem' element={ <CreateContainer/>}/>
    </Routes>
    </main>
    </div>
    </AnimatePresence>
  )
}

export default App;