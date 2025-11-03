import React from 'react';
import profileimage8 from "../assets/image/logo1.png";
import profileimage9 from "../assets/image/mail.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="links">
          <a href="https://www.linkedin.com/in/hamza-shahid-470b37388" target="_blank">
            <img src={profileimage8} alt="LinkedIn" />
            LinkedIn Profile
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <img src={profileimage9} alt="Gmail" />
            hs20072021@gmail.com
          </a>
        </div>
        <hr className="horizonline" />
        <div className="copyright">
          <h2>©2023 - HS | All rights reserved</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
