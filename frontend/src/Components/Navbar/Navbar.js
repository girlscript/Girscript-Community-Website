import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from "./../../images/logo.svg"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' className="logogs" height="200px" width="200px" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Event
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Program
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
           Event
          </NavLink>
          <NavLink to='/log-in' activeStyle>
          Login
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin' className="buttonone">Donate Now</NavBtnLink>
          <NavBtnLink to='/signin'>Join Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
