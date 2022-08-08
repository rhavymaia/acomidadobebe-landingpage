import React from "react";
import { CDBModalFooter, CDBBox, CDBBtn } from "cdbreact";
import logo from "../assets/images/logo.png";
import facebook_logo from "../assets/images/facebook_logo.png";
import twitter_logo from "../assets/images/twitter_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <CDBModalFooter className="shadow"
    style={{
      bottom: "0",
      left: "0",
      width: "100%",
    }}
    >
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "90%", display: "block" }}
      >
        <CDBBox display="flex" alignItems="center">
          <NavLink to="/" 
          className="nav-link" >
            <img alt="logo" src={logo} width="30px" />
            <span className="ml-4 h5 mb-0 font-weight-bold">
              A Comida do Bebê
            </span>
          </NavLink>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">
            &copy; A Comida do Bebê, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img alt="logo" src={facebook_logo} width="30px" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img alt="logo" src={twitter_logo} width="30px" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img alt="logo" src={instagram_logo} width="30px" />
          </a>
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};
