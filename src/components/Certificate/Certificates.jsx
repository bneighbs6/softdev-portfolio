import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import "./Certificates.css";

function Certificates() {
    return (
      <div id="certificates">
        <FontAwesomeIcon icon={faAward} className="certificate-icon" />
        <h1>Certificates Section</h1>
        <ul>
          <li>Software Engineering - Chegg Skills</li>
          <li>Full Stack Engineering - Udemy</li>
        </ul>
      </div>
    );
}

export default Certificates;