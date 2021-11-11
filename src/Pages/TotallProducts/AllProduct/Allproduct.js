import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllProduct.css';

const Allproduct = (props) => {
    const {img,price,details,name,id} = props.sendAllProduct;
    return (
        <div className="productStyle mb-5  p-3 mb-5 bg-body ">
              <div className=" singleproductStyle shadow ">
              <Card style={{width: '25rem'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="cardBodyStyle">
                    <Card.Title className="text-dark fs-3 fw-bolder">Trendy</Card.Title>
                    <h3 className="text-dark">{name}</h3>
                    <h4>Price: {price}</h4>
                    <p>{details}</p>
                    <Card.Text>
                    </Card.Text>
                    <Link to={`/booking/${id}`}>
                        <button type="button" className="btn btn-dark fw-bold ">Book Now</button>
                    </Link>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default Allproduct;