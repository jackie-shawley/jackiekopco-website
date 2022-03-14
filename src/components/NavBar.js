import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Container } from 'reactstrap';
 


export default function NavBar() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <Navbar bg='dark'>
            <Container>
                <NavbarBrand href='/'>
                    <img
                        src='/images/logo.png'
                        className='navLogo'
                        alt='Jackie Kopco logo'
                    />    
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsModalOpen(!isModalOpen)} />
                <Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" navbar>
                        <NavItem style={{ color: 'white'}}>
                        <NavLink activeClassName='active' className='nav-link' href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem style={{ color: 'white'}}>
                        <NavLink activeClassName='active' className='nav-link' href='/music'>Music</NavLink>
                        </NavItem>
                        <NavItem style={{ color: 'white'}}>
                        <NavLink activeClassName='active' className='nav-link' href='/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}