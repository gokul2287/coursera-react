import React, { useState } from 'react'; 
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header (props) {

    const [isNavOpen, setisNavOpen] = useState(false);

    const toggleNav = () => {
        setisNavOpen (
            isNavOpen = !isNavOpen
        )
    }

    return(
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick = {() => toggleNav()} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen = {isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Indian Feast</h1>
                            <p>We're an authenticate Indian Restarunt based in Norwich UK and you can get World's best vegan and vegeterian experience.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )     
}
export default Header