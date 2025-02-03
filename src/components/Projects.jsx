import React from "react";
import lawnScreenshot from "../images/lawn-screenshot.png"
import { Card, Button } from "react-bootstrap";

function Projects() {
    return (
      <div className="projects">
        <article id="projects">
          <h2 className="major">Projects</h2>
          <Card className="lawn-card">
            <Card.Img
              variant="top"
              src={lawnScreenshot}
              className="lawn-screenshot"
            />
            <Card.Body>
              <Card.Title>B Neighborly Lawn Services</Card.Title>
              <Card.Text>
                Frontend web application for a local small business specializing
                in lawn care services. Utilizing JavaScript, React, and
                Bootstrap, the application is designed to enhance user
                experience and streamline service offerings.
              </Card.Text>
              <a 
              className="project-link"
              href="https://bneighborlylawns.onrender.com/"
              target="_blank"
              rel="noopener noreferrer">
                <Button>Live Demo</Button>
              </a>
              <a 
              className="project-link"
              href="https://github.com/bneighbs6/b-neighborly-lawn"
              target="_blank"
              rel="noopener noreferrer">
                <Button>Source Code</Button>
              </a>
            </Card.Body>
          </Card>
          {/* <span className="image main">
            <img src={lawnScreenshot} alt="screenshot of a website" className="lawn-screenshot" />
          </span>
          <p>
            Frontend web application for a local small business specializing in
            lawn care services. Utilizing JavaScript, React, and Bootstrap, the
            application is designed to enhance user experience and streamline
            service offerings.
            <br />
            <a
              className="project-link"
              href="https://bneighborlylawns.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Lawn Service Website
            </a>
          </p> */}
          <p>
            Full-stack web application designed for restaurants to be able to
            create, read, update, and delete reservations from their system.
            <br />
            <a
              className="project-link"
              href="https://capstone-restaurant-reservation-ypom.onrender.com/dashboard"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Full-Stack Restaurant Reservation Application
            </a>
          </p>
          <p>
            Developed a user-friendly React application enabling recipe
            management functionalities like creation, viewing, editing, and
            deletion. This application was programmed using React, HTML5, CSS,
            and Bootstrap to streamline frontend development.
            <br />
            <a
              className="project-link"
              href="https://react-recipe-app-5i4t.onrender.com/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Recipe Application
            </a>
          </p>
        </article>
      </div>
    );
}

export default Projects;