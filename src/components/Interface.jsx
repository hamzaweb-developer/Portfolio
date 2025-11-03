import { useState } from "react";
import React from "react";
import profileimage from "../assets/image/logo2.jpg";

import profileimage10 from "../assets/image/netflix.png";
import profileimage11 from "../assets/image/spotify.png";
import profileimage12 from "../assets/image/todo.png";

import profileimage1 from "../assets/image/html.webp";
import profileimage2 from "../assets/image/css.png";
import profileimage3 from "../assets/image/JS.webp";
import profileimage4 from "../assets/image/node.png";
import profileimage5 from "../assets/image/express.png";
import profileimage6 from "../assets/image/mongo.jpg";
import profileimage7 from "../assets/image/react.png";

const Interface = () => {
  return (
    <>
    <div className="interface w-[100%]">
      <div className="logo">
        <img src={profileimage} alt="" />
      </div>
      <div className="name">
      <h1>HAMZA SHAHID</h1>
      </div>
      <div className="info">
        <p>Transforming ideas into functional, elegant solutions-let's Collaborate!</p>
      </div>
      <div className="resume">
        <button>Download Resume</button>
      </div>
    </div>
    <div className="aboutsection">
      <h1>About</h1>
      <p>Hi! I'm Hamza Shahid, a passionate Full Stack Web Developer who
            loves turning ideas into interactive and responsive web experiences.
            I specialize in building modern, user-friendly websites using HTML,
            CSS, JavaScript, React, Node.js, and Express. I enjoy creating clean
            designs, writing efficient code, and learning new technologies to
            improve my skills. My goal is to develop web applications that are
            both functional and visually appealing. When I'm not coding, I like
            exploring new tools in web development and improving my
            problem-solving abilities.
</p>
      </div>
      <div className="logosection text-center">
      <img src={profileimage1} alt="" />
      <img src={profileimage2} alt="" />
      <img src={profileimage3} alt="" />
      <img src={profileimage4} alt="" />
      <img src={profileimage5} alt="" />
      <img src={profileimage6} alt="" />
      <img src={profileimage7} alt="" />
      </div>
         <h1 className="text-white text-center text1">Projects</h1>
      <div className="cards">
        <div className="card1">
          <img src={profileimage10} alt="" />
          <h2>March 11, 2025</h2>
          <h2>Netflix Project</h2>
          <button>View Project</button>
        </div>

           <div className="card1">
          <img src={profileimage11} alt="" />
          <h2>July 19, 2025</h2>
          <h2>Spotify Project</h2>
          <button>View Project</button>
        </div>

           <div className="card1">
          <img src={profileimage12} alt="" />
          <h2>September 23, 2025</h2>
          <h2>ToDo-List Project</h2>
          <button>View Project</button>
        </div>
      </div>
    </>
  );
};

export default Interface;
