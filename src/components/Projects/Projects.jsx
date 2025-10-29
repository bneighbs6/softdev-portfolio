import React from "react";
import lawnScreenshot from "../../images/lawn-screenshot.png";
import restaurantScreenshot from "../../images/restaurant-screenshot.png";
import recipeScreenshot from '../../images/recipe-screenshot.png';
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Projects.css";

function Projects() {
    return (
      <div className="projects" id="projects">
        <article>
          <h2 className="major">Projects</h2>

          {/* Bootstrap Row for Cards */}
          <Row>
            {/* Lawn Service Card */}
            <Col xs={12} md={4} className="mb-4">
              <Card className="lawn-card">
                <Card.Img
                  variant="top"
                  src={lawnScreenshot}
                  className="project-screenshot"
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
                    rel="noopener noreferrer"
                  >
                    <Button>Live Demo</Button>
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/bneighbs6/b-neighborly-lawn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Source Code</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Restaurant Card */}
            <Col xs={12} md={4} className="mb-4">
              <Card className="restaurant-card">
                <Card.Img
                  variant="top"
                  src={restaurantScreenshot}
                  className="project-screenshot"
                />
                <Card.Body>
                  <Card.Title>
                    Full-Stack Restaurant Reservation Application
                  </Card.Title>
                  <Card.Text>
                    Full-stack web application designed for restaurants to be able
                    to create, read, update, and delete reservations from their
                    system.
                  </Card.Text>
                  <a
                    className="project-link"
                    href="https://capstone-restaurant-reservation-ypom.onrender.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Live Demo</Button>
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/bneighbs6/capstone-restaurant-reservation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Source Code</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Recipe Card */}
            <Col xs={12} md={4} className="mb-4">
              <Card className="recipe-card">
                <Card.Img
                  variant="top"
                  src={recipeScreenshot}
                  className="project-screenshot"
                />
                <Card.Body>
                  <Card.Title>Recipe Application</Card.Title>
                  <Card.Text>
                    Developed a user-friendly React application enabling recipe
                    management functionalities like creation, viewing, editing, and
                    deletion. This application was programmed using React, HTML5,
                    CSS, and Bootstrap to streamline frontend development.
                  </Card.Text>
                  <a
                    className="project-link"
                    href="https://react-recipe-app-5i4t.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Live Demo</Button>
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/bneighbs6/Recipe_App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Source Code</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </article>
      </div>
    );
}

export default Projects;