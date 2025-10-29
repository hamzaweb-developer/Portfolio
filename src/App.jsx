import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Interface from './components/Interface'
import Footer from './components/Footer'
import profilevideo from '../src/assets/image/2.jpg'

function App() {

  return (
    <>
      <Navbar/>  
      <Interface/>
      <Footer/>
    </>
  )
}

export default App
