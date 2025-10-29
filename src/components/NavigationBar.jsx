import Container from "react-bootstrap/Container";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css";

function NavigationBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });

  return (
    <Navbar expand="sm">
      <Container className="navbar-container">
        {isMobile ? (
          <Dropdown>
            <Dropdown.Toggle className="navbar-dropdown">
              <FontAwesomeIcon icon={faBars} /> Menu
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#about">About</Dropdown.Item>
              <Dropdown.Item href="#technologies">Technologies</Dropdown.Item>
              <Dropdown.Item href="#certificates">Certificates</Dropdown.Item>
              <Dropdown.Item href="#projects">Projects</Dropdown.Item>
              <Dropdown.Item href="#connect">Let's Connect</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Nav className="mx-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#connect">Let's Connect</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
