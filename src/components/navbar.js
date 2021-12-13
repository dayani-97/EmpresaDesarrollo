import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logotipo from "../logo.png";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navbarr = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <a>
              {" "}
              <img
                itemprop="logo"
                src={logotipo}
                id="logo"
                height="60"
                width="60"
                class="d-inline-block align-top"
              ></img>
            </a>
          </Navbar.Brand>
          <Navbar.Brand href="#home">Desarrollo de Software</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Productos y Servicios</Nav.Link>
              <NavDropdown title="Acerca de" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Conócenos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Quienes Somos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Misión</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Visión</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Valores</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Nuestros Clientes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contacto</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Inicia Sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
