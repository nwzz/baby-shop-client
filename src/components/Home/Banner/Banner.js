import React from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import caro1 from "../../../images/caro1.png";
import caro2 from "../../../images/images1.jpg";
import caro3 from "../../../images/banner-1.jpg";

const Banner = () => {
  return (
    <Carousel variant="dark">
      {/* <Carousel.Item style={{ height: "600px", width: "100%" }}>
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
      <Carousel.Item
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3Dw=1000q=80')",
      //   height: "600px",
      //   backgroundPosition: "center",
      // }}
      >
        <img className="d-block w-100" src={caro2} alt="Second slide" />
        <Carousel.Caption>
          <h5>No Travelling No Life</h5>
          <p>We Provide Care and Love more than Treatment</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item style={{ height: "600px", width: "100%" }}>
        <img className="d-block w-100" src={caro3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
