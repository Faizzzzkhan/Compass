import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <Home />
    </div>
    </>
  )
}

export default App
