import React from "react";
import { NavLink } from "react-router-dom";

import baby from "../assets/images/baby.png";

export default function Logo() {
    return (
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
        A Comida do Bebê
    </NavLink>
    );
};