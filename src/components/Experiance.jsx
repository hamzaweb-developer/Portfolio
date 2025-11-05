import React from 'react'

import profileimage1 from "../assets/image/html.webp";
import profileimage2 from "../assets/image/css.png";
import profileimage3 from "../assets/image/JS.webp";
import profileimage4 from "../assets/image/node.png";
import profileimage5 from "../assets/image/express.png";
import profileimage6 from "../assets/image/mongo.jpg";
import profileimage7 from "../assets/image/react.png";

const Experiance = () => {
  return (
    <>
        <div className="logosection text-center">
          <img src={profileimage1} alt="" />
          <img src={profileimage2} alt="" />
          <img src={profileimage3} alt="" />
          <img src={profileimage4} alt="" />
          <img src={profileimage5} alt="" />
          <img src={profileimage6} alt="" />
          <img src={profileimage7} alt="" />
          </div>
          <section class="experience">
  <h2>💼 Experience</h2>
  <div class="experience-list">
    <p>• HTML</p>
    <p>• CSS</p>
    <p>• JavaScript</p>
    <p>• Tailwind</p>
    <p>• React</p>
    <p>• Node.js</p>
    <p>• Express</p>
    <p>• MongoDB</p>
    <p>• UI/UX</p>
    <p>• Responsive</p>
  </div>
</section>

    </>
  )
}

export default Experiance