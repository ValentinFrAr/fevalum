import React from "react";
import logo from "../images/FEVALUM-new-copie.jpg";

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
        {/* <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button> */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src={logo}
            alt="acceuil"
            className="d-block w-100 img-carousel"
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="d-flex carousel-pub">
            <h4 className="fevalum-pub">
              <span>¡Oferta!</span> <br /> Ventanas 120x110
            </h4>

            <img
              src="https://i.ibb.co/sC0HbcQ/rsz-herrero-ok.jpg"
              alt="ventana-120x100"
              className=" img-carousel-pub"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <p className="slogan">
              Últimas <br /> disponibles <br /> ¡No te las pierdas!
            </p>
          </div>
        </div>
        {/* <div className="carousel-item">
          <img
            src="https://imgs.search.brave.com/T28clhWt_E-XYqhnh6IjSfAoQqptyQZHmdBK-tZXozQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuay1saW5lLmZy/L3B1YmxpYy9zdHls/ZXMvaHBfaW5zcGly/YXRpb25fZHJvaXRl/X2Rlc2svcHVibGlj/LzIwMjEtMTEvZmVu/ZXRyZS1maXhlLXBl/dGl0cy1ib2lzLWFs/dW1pbml1bS1rLWxp/bmUuanBnP1ZlcnNp/b25JZD1jVkg3eHlV/SXdYRXJhTG5YbU1M/bEFteWJQa0lFRmQw/RyZpdG9rPUZ4dlFZ/VU52"
            className="d-block w-100 img-carousel"
            alt=""
          />
          <div className="carousel-caption  d-md-block carousel-text">
            <h5>
              <span className="fevalum-pub">FEVALUM </span> <br />{" "}
              <span className="span-pub">Carpintería De Aluminio </span>
            </h5>
            <p className="slogan">¡Tu Visión, Nuestro Trabajo, Tu Realidad!</p>
          </div>
        </div> */}
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
