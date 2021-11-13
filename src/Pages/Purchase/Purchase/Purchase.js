import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Purchase.css';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const {user} = useAuth();
    const initialOrder={prodcutName:product.name, productID:product._id}
    const [orderInfo,setOrderInfo] = useState(initialOrder);

    useEffect(()=>{
        fetch(`https://polar-waters-05894.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handelOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = {...orderInfo};
        newOrder[field] = value;
        setOrderInfo(newOrder);
    }

    const hadelConfirmSubmit = (e) =>{
        // collect data
        const order = {
            ...orderInfo,
        }

        // send to ther server
        fetch('https://polar-waters-05894.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=> {
            e.target.reset();
        })
        e.preventDefault();
        alert('order Successful')
    }
    return (
        <>
        <Navigation></Navigation>
        <Container className="purchaseStyle mb-5">
            <Row>
                <h2>Your selected Product</h2>
                <Col xs={12} md={6}>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Text>
                        DETAILS: {product.details}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><span style={{fontWeight:'bold'}}>NAME:</span> {product.name}</ListGroupItem>
                        <ListGroupItem><span style={{fontWeight:'bold'}}>ID:</span> {product._id}</ListGroupItem>
                        <ListGroupItem><span style={{fontWeight:'bold'}}>Price: {product.price}</span></ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <h2>Confirm Your Order</h2>
                    <Form onSubmit={hadelConfirmSubmit}>
                            <Form.Group as={Col} controlId="formGridEmail" value="">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="name" onBlur={handelOnBlur} required/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  name="email" onBlur={handelOnBlur} required/>
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address" onBlur={handelOnBlur} required/>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control  name="city" onBlur={handelOnBlur} required/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="zipCode" onBlur={handelOnBlur}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" name="prodcutName" onBlur={handelOnBlur} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" >
                            <Form.Label>Product Id</Form.Label>
                            <Form.Control type="text" name="productID" onBlur={handelOnBlur} required/>
                            </Form.Group>
                        </Row>
                        <Button variant="dark" type="submit">
                            Confirm
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Purchase;