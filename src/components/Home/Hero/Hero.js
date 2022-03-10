import React from "react";
import { Carousel } from "3d-react-carousal";
import caro1 from "../../../images/caro1.png";
import caro2 from "../../../images/images1.jpg";
import caro3 from "../../../images/images.jpg";

let slides = [
  <img src={caro1} alt="1" />,

  <img src={caro2} alt="3" />,
  <img src={caro3} alt="4" />,
];

const Hero = () => {
  return <Carousel autoPlay={true} slides={slides} />;
};

export default Hero;
