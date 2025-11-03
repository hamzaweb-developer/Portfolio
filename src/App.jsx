import './App.css'
import Navbar from './components/Navbar'
import Interface from './components/Interface'
import Footer from './components/Footer'
import About from './components/About'
import Project from './components/Project'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
        </>
      ),
    },
    {
      path: '/experiance',
      element: (
        <>
          <Navbar />
          <Footer />
        </>
      ),
    },
    {
      path: '/project',
      element: (
        <>
          <Navbar />
          <Project/>
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Navbar />
          <Footer />
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}

export default App
