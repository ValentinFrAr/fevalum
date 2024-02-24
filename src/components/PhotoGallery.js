import React from "react";
import { photosData } from "../photos/photos";

const PhotoGallery = ({ searchQuery, rangeValue }) => {
  const FilteredPhotos = photosData.filter(
    (photo) =>
      photo.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.infos.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="photos-content">
        {FilteredPhotos.slice(0, rangeValue).map((photo) => (
          <div className="card" key={photo.id}>
            <img
              src={photo.img}
              alt={photo.category}
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">{photo.category}</p>
              <p className="card-text">{photo.date}</p>
              <p className="card-text">{photo.infos}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <p className="text-center">¡Más trabajos en nuestros redes sociales!</p>
      </div>
    </>
  );
};

export default PhotoGallery;
