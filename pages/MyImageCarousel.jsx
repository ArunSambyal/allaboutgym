import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../images/content/slider.jpg";
import CarouselImage2 from "../images/images/banner.png";
import CarouselImage3 from "../images/content/new.jpg";
import CarouselImage4 from "../images/content/slider (4).jpg";
import "../styles/carousel.css";
function MyCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100  medium-opacity-image"
          src={CarouselImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-captions">All About Gym</h3>
          <p>
            We give your gym a voice strength and clarity by first, helping you
            define it,
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 medium-opacity-image"
          src={CarouselImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-captions">Our Equipments</h3>
          <p>
            We offer consultancy and advisory service for both start up and
            established gym businesses.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 medium-opacity-image"
          src={CarouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-captions"> Our team </h3>
          <p>
            We are a gym business consulting firm
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  medium-opacity-image"
          src={CarouselImage4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-captions">Gym Business</h3>
          <p>
            We give your gym a voice strength and clarity by first, helping you
            define it,
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
