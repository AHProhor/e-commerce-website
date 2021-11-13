
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import './Review.css';

const Review = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container className="formStyle">
                <h2>Please Give Your Order Review Here</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="dark">Post Review</Button>
            </Container>
        </div>
    );
};

export default Review;