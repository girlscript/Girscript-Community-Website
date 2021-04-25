import React from "react";
import "./navbar.css";
import Logo from "./GS_logo_black(1).png";
import {Nav, Navbar} from 'react-bootstrap'

const NavComp = () =>{
    return(
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
  <a className="navbar-brand" href="#">
    <img src={Logo} alt="logo" className="image" />
      </a>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav className="nav-link">About</Nav>
      <Nav className="nav-link">Event</Nav>
      <Nav className="nav-link">Program</Nav>
      <Nav className="nav-link">Contact</Nav>
      <Nav className="nav-link">Login</Nav>
    </Nav>
    <div className="mob-show">
    <div><a href="#" className="button">Donate Now</a></div>
      <div><a href="#" className="button">Join Us</a></div>
    </div>
  </Navbar.Collapse>
</Navbar>
    );
};
export default NavComp;