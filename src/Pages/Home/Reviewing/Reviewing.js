import React from 'react';
import { Card } from 'react-bootstrap';

const Reviewing = (props) => {
    const {email,content} = props.sendReview;
    return (
        <div className="trendyProductStyle mb-5 shadow p-3 mb-5 bg-body ">
              <div className="">
              <Card style={{ width: '29rem' }}>
                <Card.Body className="cardBodyStyle">
                    <Card.Title className="text-dark fs-3 fw-bolder"></Card.Title>
                    <h4>User: {email}</h4>
                    <p>{content}</p>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default Reviewing;