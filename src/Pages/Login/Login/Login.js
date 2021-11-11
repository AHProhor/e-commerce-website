import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/bannerimg/login Banner.jpg';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {
    return (
        <>
        <Navigation></Navigation>
        <div className="loginStyle">
            
            <div className="loginButtonStyle">
                <h2>Please Login</h2>
            <Button variant="dark">Google Sign In</Button><br />
            <NavLink 
                to="/register"
                style={{textDecoration:"none"}}
                >
                <Button variant="text">New User? Please Register</Button>
            </NavLink>
            </div>
            <div className="imagesStyle">
                <img src={loginImg} alt="" />
            </div>
        </div>
        </>
    );
};

export default Login;