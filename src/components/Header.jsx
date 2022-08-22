import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import baby from "../assets/images/baby.png";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/"
            className="nav-link"
            style={isActive => ({
              color: isActive ? "black" : "black"
            })} >
            <img
              alt=""
              src={baby}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            A comida do Bebê
            </NavLink>
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
