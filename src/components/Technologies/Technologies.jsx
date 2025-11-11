import React from "react";
import "./Technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card } from "react-bootstrap";

function Technologies() {
    return (
      <div id="technologies">
        <div className="techonologies-container">
          <FontAwesomeIcon icon={faLaptopCode} className="techonology-icon" />
          <h3>Technologies</h3>
          <div className="frontend-technologies-container">
            <Row className="align-center-stretch">
              <Col xs={12} md={4} className="mb-4 d-flex">
                <Card className="universal-card h-100 w-100">
                  <Card.Body>
                    <Card.Title>Frontend Technologies</Card.Title>
                    <Card.Text>
                      HTML, CSS, Bootstrap CSS, Javascript, React
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-4 d-flex">
                <Card className="universal-card h-100 w-100">
                  <Card.Body>
                    <Card.Title>Backend Technologies</Card.Title>
                    <Card.Text>
                      Node.js, Express, PostgreSQL, Rest API
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
}

export default Technologies;