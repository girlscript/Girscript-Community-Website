import React from "react";
import styled from "styled-components";
import "./navbar.css";
import Logo from "./GS_logo_black(1).png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
      <img src={Logo} alt="logo" className="image" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Program
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
        <Button className="btn" type="submit">
          Donate Now
        </Button>
        <Button className="btn" type="submit">
          Join Us
        </Button>
      </div>
    </nav>
  );
};

const Button = styled.button`
    width: 160px;
    border-radius: 10px;
    background-color: #e05d00;
    font-size: 1.2em;
    margin: 10px;
    color: white;
    height: 50px;

    &:hover {
    background-color: white;
    color: #e05d00;
    }
`; 

export default Navbar;