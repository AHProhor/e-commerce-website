import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
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
                    {
                        user.email && <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                          Dashboard
                        </Dropdown.Toggle>
                      
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/myorder">My orders</Dropdown.Item>
                          <Dropdown.Item as={Link} to="/payment">Payment</Dropdown.Item>
                          <Dropdown.Item as={Link} to="/review">Review</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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