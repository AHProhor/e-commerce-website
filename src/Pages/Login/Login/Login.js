import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../images/bannerimg/login Banner.jpg';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {loginUser,isLoading,user,signInWithGoogle,authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const hadelLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }

    const handelGoogleSignIn = () =>{
        signInWithGoogle(location,history);
    }
    return (
        <Container>
            <Row>
                <Col className="loginFormStyle">
                <h2>Please Login</h2>
                <form onSubmit={hadelLoginSubmit}>
                    <div className="form-group mt-5">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" 
                        onBlur={handelOnChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onBlur={handelOnChange}/>
                    </div>
                    <Button type="submit" variant="dark" className="mt-3">Sign In</Button>
                </form>
                {isLoading && <Spinner animation="grow" />}
                {user?.email && <Alert variant="success" className="mt-3">
                            You are SuccessFully Login
                        </Alert> }
                {authError && <Alert variant="danger" className="mt-3">
                            Error{authError}
                        </Alert> }
                <p>or</p>
                <Button variant="dark" className="mt-3" onClick={handelGoogleSignIn}>Google Sign In</Button><br />
                <NavLink 
                to="/register"
                style={{textDecoration:"none"}}
                >
                <Button variant="text">New User? Please Register</Button>
                </NavLink>
                </Col>
                <Col className="loginImageStyle">
                <img src={loginImg} alt="" />
                </Col>
            </Row>        
        </Container>
    );
};

export default Login;
