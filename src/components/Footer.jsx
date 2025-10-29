import React from 'react'
import profileimage8 from "../assets/image/logo1.png";
import profileimage9 from "../assets/image/mail.png";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="links flex">
        <a href="https://www.linkedin.com/in/hamza-shahid-470b37388" target='_blank'><img src="" alt="" /><img width={25} src={profileimage8} alt="" />LinkedIn Profile Link</a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'><img src={profileimage9} alt="" />Gmail Account: hs20072021@gmail.com</a>
      </div>
  
    </div>
     <hr className='horizonline'/>
          <div className="copyright">
        <h2>©2023-HS | All right reserved</h2>
      </div>
    </>
  )
}

export default Footer