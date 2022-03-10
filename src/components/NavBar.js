import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Container } from 'reactstrap'; 


export default function NavBar() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <Navbar bg='dark'>
            <Container>
                <NavbarBrand href='#home'>
                    <img
                        src='../public/images/logo.png'
                        className='navLogo'
                        alt='Jackie Kopco logo'
                    />    
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsModalOpen(!isModalOpen)} />
                <Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavItem>
                        <NavLink to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to='/music'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to='/contact'>Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}