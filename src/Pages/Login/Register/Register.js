import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../images/bannerimg/login Banner.jpg';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {registerUser,isLoading,user,authError} = useAuth();

    const history = useHistory();
    const handelOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handelRegisterSubmit = e =>{
        registerUser(loginData.email , loginData.password,loginData.name,loginData.phone,history);
        e.preventDefault();
    }
    return (
        <Container>
            <Row>
                <Col className="registerFormStyle">
                <h2>Please Register Here</h2>
                {!isLoading && <form onSubmit={handelRegisterSubmit}>
                    <div className="form-group mt-5">
                        <label for="exampleInputEmail1">Your Name</label>
                        <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"
                        name="name" 
                        onBlur={handelOnBlur}/>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        name="email" 
                        onBlur={handelOnBlur}/>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        name="password" 
                        onBlur={handelOnBlur}/>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Phone Number</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone Number"
                        name="phone" 
                        onBlur={handelOnBlur}/>
                    </div>
                    <Button type="submit" variant="dark" className="mt-3">Submit</Button>
                </form>}
                {isLoading && <Spinner animation="grow" />}
                {user?.email && <Alert variant="success" className="mt-3">
                            You are SuccessFully registerd
                        </Alert> }
                {authError && <Alert variant="danger" className="mt-3">
                            Error{authError}
                        </Alert> }
                <NavLink 
                to="/login"
                style={{textDecoration:"none"}}
                >
                <Button variant="text">Alredy have an Account? Please Login</Button>
                </NavLink>
                </Col>
                <Col className="registerImageStyle">
                <img src={loginImg} alt="" />
                </Col>
            </Row>        
        </Container>
    );
};

export default Register;