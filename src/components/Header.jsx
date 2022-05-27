import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import logo from '../assets/images/logo.png';
import { App } from '../App';
import { Signin } from './Signin';
import { Signup } from './Signup';

export const Header = () => {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              <NavLink to={"/"} >A comida do Bebê</NavLink>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to={"/signin"} >Sign in</NavLink>
                <NavLink to={"/signup"} >Sign up</NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}
