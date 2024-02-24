import React from "react";
import Nosotros from "../components/Nosotros";
import Carousel from "../components/Carousel";
import GalleryComponent from "../components/GalleryComponent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="content-home">
        <Nosotros />
        <GalleryComponent />
      </div>
      <Footer />
    </>
  );
};

export default Home;
