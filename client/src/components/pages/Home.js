import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import Icon from "./assets/face.png";
import Carousel from "react-bootstrap/Carousel";
import CarouselPic1 from "./assets/jumbotron_1920x780.jpg";
import CarouselPic2 from "./assets/carouselpic2.jpg";
import CarouselPic3 from "./assets/carouselpic3.png";

import Container from "react-bootstrap/Container";

function Home() {
  const location = useLocation();
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={CarouselPic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="heading-home carousel-heading">
              Cosmetiqua Tattooing
            </h1>
            <h2 className="carousel-subtitle">Wake up beautiful.</h2>;
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img2"
            src={CarouselPic2}
            alt="First slide"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="heading-home carousel-heading">
              Cosmetiqua Tattooing
            </h1>
            <h2 className="carousel-subtitle">Wake up ready.</h2>;
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img3"
            src={CarouselPic3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="heading-home carousel-heading">
              Cosmetiqua Tattooing
            </h1>
            <h2 className="carousel-subtitle">Wake up confident.</h2>;
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="jumbotron">
        
        <img className="icon-face" src={Icon} alt="website logo" />
        <p className="home-text" img src={Icon} alt="website logo">
          Wake up ready for anything!
        </p>
        <button className="btn-see">
          <Link
            to="/services"
            className={location.pathname === "/services"}
            className="btn-see-link"
          >
            Services
          </Link>
        </button>
      </div> */}
    </div>
  );
}

export default Home;
