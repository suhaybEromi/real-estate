import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/first-icon.png";
import iraq from "../assets/iraq.png";
import united from "../assets/united.png";
import kurdish from "../assets/kurdish.png";

export default function CustomNavbar() {
  return (
    <div className="shadow-lg">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" width="100" />
          </div>

          {/* Center: Nav Links */}
          <div className="d-flex flex-grow-1 justify-content-center gap-4">
            <Link className="text-decoration-none text-dark fw-bold" to="/">
              Home
            </Link>
            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/offers"
            >
              Offers
            </Link>
            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/orders"
            >
              Orders
            </Link>
            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/branches"
            >
              Branches
            </Link>
            <Link className="text-decoration-none text-dark fw-bold" to="/team">
              Our Team
            </Link>

            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/contact"
            >
              Contact
            </Link>
          </div>

          {/* Right: Phone & Language */}
          <div className="d-flex align-items-center gap-3 flex-shrink-0">
            <span className="fw-bold text-dark">0750 048 4170</span>
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                className="border-0 bg-transparent"
              >
                <img src={united} width="24" alt="EN" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className="d-flex align-items-center gap-2"
                  href="#/ku"
                >
                  <img src={kurdish} width="24" alt="KU" />
                  کوردی
                </Dropdown.Item>
                <Dropdown.Item
                  className="d-flex align-items-center gap-2"
                  href="#/en"
                >
                  <img src={united} width="24" alt="EN" />
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  className="d-flex align-items-center gap-2"
                  href="#/ar"
                >
                  <img src={iraq} width="24" alt="AR" />
                  العربي
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>
    </div>
  );
}
