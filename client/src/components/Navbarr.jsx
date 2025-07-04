import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Navbarr() {
  return (
    <>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} width="220px" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <h4>
              <Link
                className="text-decoration-none text-dark fw-bold me-5"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-decoration-none text-dark fw-bold me-5"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-decoration-none text-dark fw-bold me-5"
                to="/lifestyle"
              >
                Lifestyle
              </Link>
              <Link
                className="text-decoration-none text-dark fw-bold me-5"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="text-decoration-none text-dark fw-bold me-5"
                to="/projects"
              >
                Our Projects
              </Link>
              <Link
                className="text-decoration-none text-dark fw-bold me-5"
                to="/career"
              >
                Career
              </Link>
              <Link
                className="text-decoration-none text-dark fw-bold"
                to="/contact"
              >
                Contact Us
              </Link>
            </h4>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
