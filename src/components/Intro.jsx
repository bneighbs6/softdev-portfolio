import React from "react";
import headshot from "../images/headshot.jpeg";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";


function Intro() {
  return (
    <div id="intro">
      <img src={headshot} alt="adult male smiling" />
      <div>
        <h2>
          A Software Developer based in Kalispell, MT, creating seamless digital
          experiences. Explore my work and let’s discuss your project!
        </h2>
      </div>
      <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
        <button className="projects-btn">
          Projects
        </button>
      </Nav.Link>
    </div>
  );
}

export default Intro;
