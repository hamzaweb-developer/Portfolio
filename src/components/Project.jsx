import React from 'react'
import profileimage10 from "../assets/image/netflix.png";
import profileimage11 from "../assets/image/spotify.png";
import profileimage12 from "../assets/image/todo.png";

const Project = () => {
  return (
    <>
       <h1 className="text-white text-center text1 text2">Projects</h1>
          <div className="cards card2 p-[100px]">
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
  )
}

export default Project