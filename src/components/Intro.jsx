import React from "react";
import headshot from "../images/headshot.jpeg";


function Intro() {
  return (
    <>
    <img src={headshot} alt="adult male smiling" />
      <div>
        <h2>
          A Software Developer based in Kalispell, MT, creating seamless digital
          experiences. Explore my work and let’s discuss your project!
        </h2>
      </div>
      <button className="projects-btn">Projects</button>
    </>
  );
}

export default Intro;
