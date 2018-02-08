import React, { Component } from 'react';
import './Header.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="dark" className="navbar-dark bg-dark" expand="md">
                <NavbarBrand href="/">Beer Portifolio </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink exact to='/styles' activeClassName="active" tag={RRNavLink} >Styles</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to='/beers' activeClassName="active" tag={RRNavLink}>Beers</NavLink>
                        </NavItem>
                        <NavItem>

                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;