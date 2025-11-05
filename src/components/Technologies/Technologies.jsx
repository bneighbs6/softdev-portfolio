import React from "react";
import "./Technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Technologies() {
    return (
        <div id="technologies">
            <FontAwesomeIcon icon={faLaptopCode} className="techonology-icon" />
            <h1>Technologies Section</h1>
            <h3>HTML, CSS, Bootstrap CSS, Javascript, Node.js, React, Express, PostgreSQL</h3>
        </div>
    );
}

export default Technologies;