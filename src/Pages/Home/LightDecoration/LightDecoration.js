import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../../images/bannerimg/service1.jpg';
import banner2 from '../../../images/bannerimg/service2 .jpg';
import banner3 from '../../../images/bannerimg/service3.jpg';
import './LightDecoration.css';

const LightDecoration = () => {
    return (
        <Container className="serviceStyle">
           <h1 className="m-5 text-dark fw-bolder">Light Decoration Service</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Interior Design</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Light Design</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default LightDecoration;