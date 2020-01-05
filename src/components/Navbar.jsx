import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const link = (title) => {
	return (
        <MDBNavItem>
            <MDBNavLink to="#!">{title}</MDBNavLink>
        </MDBNavItem>
    );
};

class Navbar extends Component {
    render () {
        return (
            <Router >
                <MDBNavbar id="navbar" dark expand="md">
                    <MDBNavbarBrand>
                        <MDBIcon size="2x" icon="coins" className="icon"/>
                        <div className="title">Crypto Exchange</div>
                    </MDBNavbarBrand>
    
                    <MDBNavbarNav left>
                        {link('Home')}
                        {link('Overview')}
                        {link('Market')}
                        {link('News')}
                        {link('Trade')}
                        {link('Settings')}
                        {link('Profile')}
                        {link('Help')}
                    </MDBNavbarNav>
                    
                </MDBNavbar>
            </Router>
        );
    }
}

export default Navbar;