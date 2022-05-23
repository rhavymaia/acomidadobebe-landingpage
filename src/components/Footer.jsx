import React from 'react';
import { CDBModalFooter, CDBBox, CDBBtn, CDBCloseIcon } from 'cdbreact';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <CDBModalFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '90%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt='logo'
              src={logo}
              width="30px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">A Comida do Bebê</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; A Comida do Bebê, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBCloseIcon fab icon="facebook" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBCloseIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBCloseIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;