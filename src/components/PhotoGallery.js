import React from "react";
import { photosData } from "../photos/photos";

const PhotoGallery = ({ rangeValue, activeFilter }) => {
  const filteredPhotos = photosData.filter(
    (photo) => activeFilter === "" || photo.category === activeFilter // Ajouter le filtre actif à la condition
  );

  return (
    <section className="photos-content">
      {filteredPhotos.slice(0, rangeValue).map((photo) => (
        <div className="card" key={photo.id}>
          <div className="card-img">
            <img
              src={photo.img}
              alt={photo.category}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <p className="card-text">
              <span className="span-card-text">Categoría: </span>
              &nbsp;
              {photo.category}
            </p>
            <p className="card-text">
              <span className="span-card-text">Línea: </span>
              &nbsp; {photo.línea}
            </p>
            <p className="card-text" data-fulltext={photo.infos}>
              <span className="span-card-text">Información: </span>
              &nbsp; {photo.infos}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
