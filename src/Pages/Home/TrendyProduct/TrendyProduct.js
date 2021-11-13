import React from 'react';
import { Card } from 'react-bootstrap';
import './TrendyProduct.css';
const TrendyProduct = (props) => {
    const {img,price,details,name} = props.sendTrendyProduct;
    return (
        <div className="trendyProductStyle mb-5 shadow p-3 mb-5 bg-body ">
              <div className="">
              <Card style={{ width: '29rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="cardBodyStyle">
                    <Card.Title className="text-dark fs-3 fw-bolder">Trendy</Card.Title>
                    <h3 className="text-dark">{name}</h3>
                    <h4>Price: {price}</h4>
                    <p>{details}</p>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default TrendyProduct;