import React, { useState } from 'react'; 
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header (props) {

    let [isNavOpen, setisNavOpen] = useState(false);
    let [isModalOpen, setisModalOpen] = useState(false);
 
    const toggleNav = () => {
        setisNavOpen (
            isNavOpen = !isNavOpen
        )
    }

    const toggleModal = () => {
        setisModalOpen (
            isModalOpen = !isModalOpen
        )
    }

    const handleLogin = (event) => {
        toggleModal();
        //alert("username: "+ username.value + " Password :" + password.value + " Remember: " + remember.checked);
        event.preventDefault();
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
                        <Nav className = "ml-auto">
                            <NavItem>
                                <Button outline onClick = {() => toggleModal()}>
                                    <span className = "fa fa-sign-in fa-lg"> Login </span>
                                </Button>
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
            <Modal isOpen = {isModalOpen} toggle = {toggleModal}>
                <ModalHeader toggle = {toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit = {handleLogin}> 
                        <FormGroup>
                            <Label htmlFor = "username"> UserName </Label>
                            <Input type = "text" id="username" name="username"></Input>
                            {/* innerRef = {(input) => username = input}  */}
                        </FormGroup>
                        
                        <FormGroup>
                            <Label htmlFor = "password"> Password </Label>
                            <Input type = "password" id="password" name="password" ></Input>
                            {/* innerRef = {(input) => password = input} */}
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type = "checkbox" name="remember"></Input>Remember Me
                                {/* innerRef = {(input) => remember = input} */}
                            </Label>
                        </FormGroup>
                        <Button type = "submit" value = "submit" color = "primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )     
}
export default Header