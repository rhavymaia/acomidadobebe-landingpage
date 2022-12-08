import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Logo />
            Jenkins Build Teste - Load Balancer - Build Automático 2.1
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/signin"
              className="nav-link" >Sign in</NavLink>

              <NavLink to="/signup" 
              className="border rounded nav-link" >Sign up</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
