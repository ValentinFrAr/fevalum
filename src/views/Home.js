import React from "react";
import Nosotros from "../components/Nosotros";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Productos from "../components/Productos";
import Trabajos from "../components/Trabajos";

const Home = () => {
  return (
    <>
      <Carousel />
      <ScrollAnimation animateIn="fadeIn">
        <div className="div-1">
          <Nosotros />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Productos />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Trabajos />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Home;
