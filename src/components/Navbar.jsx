import React from 'react'
import profileimage2 from "../assets/image/logo2.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navsection flex justify-between items-center px-10 py-5">
        <div className="logo2">
          <img src={profileimage2} className="w-16 h-16 rounded-full" alt="logo" />
        </div>
        <div className="btns">
          <ul className="flex gap-8 text-white font-semibold">
            <li>ABOUT</li>
            <li>EXPERIENCE</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
