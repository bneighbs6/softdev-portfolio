import React from "react";

function Projects() {
    return (
      <div className="projects">
        <article id="projects">
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src="images/pic02.jpg" alt="" />
          </span>
          <p>
            Frontend web application for a local small business specializing in
            lawn care services. Utilizing JavaScript, React, and Bootstrap, the
            application is designed to enhance user experience and streamline
            service offerings.
            <br />
            <a className="project-link" href="https://bneighborlylawns.onrender.com/">
              Frontend Lawn Service Website
            </a>
          </p>
          <p>
            Full-stack web application designed for restaurants to be able to
            create, read, update, and delete reservations from their system.
            <br />
            <a className="project-link" href="https://capstone-restaurant-reservation-ypom.onrender.com/dashboard">
              Full-Stack Restaurant Reservation Application
            </a>
          </p>
          <p>
            Developed a user-friendly React application enabling recipe
            management functionalities like creation, viewing, editing, and
            deletion. This application was programmed using React, HTML5, CSS,
            and Bootstrap to streamline frontend development.
            <br />
            <a className="project-link" href="https://react-recipe-app-5i4t.onrender.com/">
              Recipe Application
            </a>
          </p>
        </article>
      </div>
    );
}

export default Projects;