import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant="light" className="transparent-navbar"> {/* Add custom class */}
      <Container>
        <Nav className="mx-auto">
          <Nav.Link
            as={Link}
            to="about"
            smooth={true}
            duration={500}
            className="nav-link" // Use className instead of inline styles
          >
            About Me
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="technologies"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Technologies
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="certificates"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Certificates
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Projects
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="connect"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Let's Connect
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;