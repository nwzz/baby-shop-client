import React from 'react';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import caro1 from '../../../images/caro1.png';
import caro2 from '../../../images/images1.jpg';
import caro3 from '../../../images/images.jpg';

const Banner = () => {
    return (
        <Carousel variant="dark">
                    <Carousel.Item style={{height:'600px', width:'100%'}}>
                        <img
                            className="d-block w-100 align-item-center"
                            src={caro1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Travelling is Meditation</h5>
                            <p>We care about You the best Way</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'600px', width:'100%'}}>
                        <img
                            className="d-block w-100"
                            src={caro2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>No Travelling No Life</h5>
                            <p>We Provide Care and Love more than Treatment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'600px', width:'100%'}}>
                        <img
                            className="d-block w-100"
                            src={caro3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Where do You Want to go before you Die </h5>
                            <p>The Second way of Learning is Reading book First way you are getting here!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    );
};

export default Banner;