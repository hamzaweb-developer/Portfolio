import React, { useState } from 'react';
import profileimage2 from "../assets/image/logo2.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navsection">
        <div className="logo2">
                <h1 className='name'>Hamza Web Developer</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="menuicon" onClick={handleMenu}>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        </div>

        {/* Menu Items */}
        <div className={`btns ${menuOpen ? 'showmenu' : ''}`}>
          <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <Link to="/experiance"><li>EXPERIENCE</li></Link>
            <Link to="/project"><li>PROJECTS</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
