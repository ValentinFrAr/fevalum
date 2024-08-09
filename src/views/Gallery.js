import React, { useState } from "react";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";
import ButtonsFilter from "../components/ButtonsFilter";

const Gallery = () => {
  // const [rangeValue, setRangeValue] = useState(30);
  const [activeFilter, setActiveFilter] = useState(""); // État pour le filtre actif

  return (
    <div>
      <ButtonsFilter
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter} // Passer le filtre actif pour l'état du bouton
      />
      <PhotoGallery activeFilter={activeFilter} />
      <Footer />
    </div>
  );
};

export default Gallery;
