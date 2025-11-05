import './App.css'
import Navbar from './components/Navbar'
import Interface from './components/Interface'
import Footer from './components/Footer'
import About from './components/About'
import Project from './components/Project'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Experiance from './components/Experiance'
import Contact from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Interface />
          <Footer />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar />
          <About/>
          <Footer/>
        </>
      ),
    },

    {
      path: '/project',
      element: (
        <>
          <Navbar />
          <Project/>
          <Footer/>
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Navbar />
          <Contact/>
        </>
      ),
    },
     {
      path: '/experiance',
      element: (
        <>
          <Navbar />
          <Experiance/>
          <Footer/>
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}

export default App
