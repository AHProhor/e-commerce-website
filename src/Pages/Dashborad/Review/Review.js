
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Review.css';

const Review = () => {
    const emailRef = useRef();
    const contentRef = useRef();

    
    const handelReviewPost = e =>{
        const content = contentRef.current.value;
        const email =  emailRef.current.value;
        
        const newReview = {content,email};
        console.log(newReview);
        // send data 
        fetch('https://polar-waters-05894.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Review SuccessFully Posted');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container className="formStyle">
                <h2>Please Give Your Order Review Here</h2>
            <Form onSubmit={handelReviewPost}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" ref={emailRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={contentRef}/>
                </Form.Group>
                <Button variant="dark" type="submit">
                            Confirm
                        </Button>
            </Form> 
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Review;