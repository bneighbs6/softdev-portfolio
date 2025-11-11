import React from "react";
import "./Technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card } from "react-bootstrap";

function Technologies() {
  return (
    <div id="technologies">
      <div className="technologies-container">
        <FontAwesomeIcon icon={faLaptopCode} className="technology-icon" />
        <h2>Technologies</h2>

        <Row className="align-items-stretch">
          {/* Frontend Card */}
          <Col xs={12} md={6} className="mb-4 d-flex">
            <Card className="universal-card h-100 w-100">
              <Card.Body>
                <Card.Title>Frontend Technologies</Card.Title>
                <hr />
                <Card.Text>
                  HTML, CSS, Bootstrap CSS, JavaScript, React
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend Card */}
          <Col xs={12} md={6} className="mb-4 d-flex">
            <Card className="universal-card h-100 w-100">
              <Card.Body>
                <Card.Title>Backend Technologies</Card.Title>
                <hr />
                <Card.Text>
                  Node.js, Express, PostgreSQL, REST API
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Technologies;
