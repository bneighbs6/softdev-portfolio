import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import "./Certificates.css";
import { Card, Row, Col } from "react-bootstrap";

function Certificates() {
    return (
      <div id="certificates">
        <div className="certificates-container">
          <FontAwesomeIcon icon={faAward} className="certificate-icon" />
          <h1>Certificates</h1>
          <Row className="align-items-stretch">
            <Col xs={12} md={6} className="mb-4 d-flex">
              <Card className="universal-card h-100 w-100">
                <Card.Body>
                  <Card.Title>Chegg Skills</Card.Title>
                  <hr />
                  <Card.Text>Engineering Flex</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-4 d-flex">
              <Card className="universal-card h-100 w-100">
                <Card.Body>
                  <Card.Title>Udemy</Card.Title>
                  <hr />
                  <Card.Text>Full Stack Engineering</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default Certificates;