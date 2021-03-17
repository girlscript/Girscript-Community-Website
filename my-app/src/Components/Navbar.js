import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import image from "./GIRLSCRIPT.TECH_.png";
import { Button } from "./Button"
import './Navbar.css'


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img src={image} className="logo-resizing" alt="l"/><i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
               
                <Button className="button1">Donate Now</Button>
                <Button className="button2">Join Us</Button>
            </nav>
        )
    }
}

export default Navbar