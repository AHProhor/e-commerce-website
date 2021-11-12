import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark"  fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Light House</Navbar.Brand>
                    <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/allproducts">All Products</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    {
                        user.email && <Nav.Link as={Link} to="/dasboard">Dashboard</Nav.Link>
                    }
                    {
                        user?.email ?
                        <Nav.Link onClick={logOut}>Logout</Nav.Link>
                        : 
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;