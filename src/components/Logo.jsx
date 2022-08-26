import React from "react";
import { NavLink } from "react-router-dom";

import logo2 from "../assets/images/logo2.png";

export default function Logo() {
    return (
    <NavLink to="/" 
    className="nav-link" 
    style={isActive => ({
        color: isActive ? "black" : "black"
    })} >
        <img
        alt=""
        src={logo2}
        width="37"
        height="30"
        className="d-inline-block align-top"
        />{" "}
        A Comida do Bebê
    </NavLink>
    );
};