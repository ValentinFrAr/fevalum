import React from "react";
import { Link } from "react-router-dom";

const GalleryComponent = () => {
  return (
    <>
      <div className=" home-gallery galeria-main">
        <div className="div-title-galeria mx-auto pb-2">
          <h2 className="title-galeria">Trabajos</h2>
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel galeria slide w-50"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active galeria-carousel">
              <img
                src="https://i.ibb.co/4ggLqv3/IMG-20240204-WA0002.jpg"
                alt="IMG-20240204-WA0002"
                className="d-block w-100"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item galeria-carousel">
              <img
                src="https://i.ibb.co/jMhF822/IMG-20240204-WA0015.jpg"
                alt="IMG-20240204-WA0015"
                className="d-block w-100"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item galeria-carousel">
              <img
                src="https://i.ibb.co/wdbVDLK/fenetre-porte.jpg"
                alt="fenetre-porte"
                className="d-block w-100"
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="mt-2 btn-gallery">
          <Link to="/galeria">
            <button>Ver más</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
