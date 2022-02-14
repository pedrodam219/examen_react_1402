import React from 'react';
import uuid from 'react-uuid';
import {PaginasApp}from '../data/PaginasApp';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,Offcanvas } from 'react-bootstrap';
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Examen react
            <img
              className="logo-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              width="150px"
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Ejercicios</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            {PaginasApp.map((item) => {
                return (
                  <Nav.Link key={uuid()} as={Link}  to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
  }
}
export default Menu;