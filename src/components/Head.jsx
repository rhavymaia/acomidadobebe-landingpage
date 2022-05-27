import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

import logo from '../assets/images/logo.png';

export const Head = () => {
  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <img alt="" src={logo} width="35"height="35"/>
            <NavLink className="navbar-brand" to={"/"}>A Comida do Bebê</NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/signin"}>Sign in</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/signup"}>Sign up</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
