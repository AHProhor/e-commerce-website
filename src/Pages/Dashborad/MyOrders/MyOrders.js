import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const MyOrders = () => {
    const {user} = useAuth();
    const [order, setOrder] = useState([])
    console.log(order)
    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <h2 style={{marginTop:"100px", marginLeft:"50px"}}>Your Orders</h2>
            <Container >
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Product ID</th>
                    <th>Address</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(ord => <tr
                        key={ord._id}
                        >
                        <td>{ord.prodcutName}</td>
                        <td>{ord.productID}</td>
                        <td>{ord.address}</td>
                        <td>{ord.email}</td>  
                        <td><Button>Cancel Order</Button></td>  
                        </tr>)
                    }
                    
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default MyOrders;