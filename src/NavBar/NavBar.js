import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
function NavBar() {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
    >
      <Container>
        <NavLink to="/" className={"link"}>
          <div className="brand">
            <img className="logo" src={logo} alt="logo" />
            <p className="head">Smartfolio</p>
          </div>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <NavLink to="/" className={"navlink"}>
                Templates
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/profile" className={"navlink"}>
                Profile
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" className={"navlink"}>
                About Us
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
