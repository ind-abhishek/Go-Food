import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselContainer() {
  return (
    <div id="Carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/100×100?juice"
            style={{ filter: "brightness(30%)" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/100×100?pizza"
            style={{ filter: "brightness(30%)" }}
            alt="Second slide"
          />
          <Carousel.Caption>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
