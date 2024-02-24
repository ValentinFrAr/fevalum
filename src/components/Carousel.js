import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide main-carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://i.ibb.co/jzh1qrw/acceuil.jpg"
            alt="acceuil"
            className="d-block w-100 img-carousel"
          />
          <div className="carousel-caption d-md-block carousel-text">
            <h5>
              <span className="fevalum-pub">FEVALUM </span> <br />{" "}
              <span className="span-pub">Carpintería De Aluminio </span>
            </h5>
            <p className="slogan">¡Tu Visión, Nuestro Trabajo, Tu Realidad!</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className="d-flex">
            <img
              src="https://i.ibb.co/Mgcz5bd/ventana-120x100.jpg"
              alt="ventana-120x100"
              className="d-block w-100 img-carousel"
            />{" "}
            <img
              src="https://i.ibb.co/Mgcz5bd/ventana-120x100.jpg"
              alt="ventana-120x100"
              className=" w-100 img-carousel second-img-carousel"
            />
          </div>
          <div className="carousel-caption  d-md-block carousel-text">
            <h5>
              <span className="fevalum-pub"> ¡Ofertas ventanas 120x100! </span>{" "}
              <br />{" "}
              {/* <span className="span-pub">Carpintería De Aluminio </span> */}
            </h5>
            <p className="slogan">
              No encontrarás mejor precio, ¡No dudes en escribirnos!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://imgs.search.brave.com/T28clhWt_E-XYqhnh6IjSfAoQqptyQZHmdBK-tZXozQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuay1saW5lLmZy/L3B1YmxpYy9zdHls/ZXMvaHBfaW5zcGly/YXRpb25fZHJvaXRl/X2Rlc2svcHVibGlj/LzIwMjEtMTEvZmVu/ZXRyZS1maXhlLXBl/dGl0cy1ib2lzLWFs/dW1pbml1bS1rLWxp/bmUuanBnP1ZlcnNp/b25JZD1jVkg3eHlV/SXdYRXJhTG5YbU1M/bEFteWJQa0lFRmQw/RyZpdG9rPUZ4dlFZ/VU52"
            className="d-block w-100 img-carousel"
            alt="..."
          />
          <div className="carousel-caption  d-md-block carousel-text">
            <h5>
              <span className="fevalum-pub">FEVALUM </span> <br />{" "}
              <span className="span-pub">Carpintería De Aluminio </span>
            </h5>
            <p className="slogan">¡Tu Visión, Nuestro Trabajo, Tu Realidad!</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
