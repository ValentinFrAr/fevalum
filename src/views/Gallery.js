import React, { useState } from "react";
import Filter from "../components/Filter.js";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rangeValue, setRangeValue] = useState(30);

  return (
    <div>
      <Filter
        searchQuery={searchQuery}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        setSearchQuery={setSearchQuery}
      />
      <PhotoGallery searchQuery={searchQuery} rangeValue={rangeValue} />
      <Footer />
    </div>
  );
};

export default Gallery;
