import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark"  fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                    <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/allproducts">All Products</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;