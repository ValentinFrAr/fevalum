import React, { useState, useEffect } from "react";
import { photosData } from "../photos/photos";
import ButtonGallery from "./ButtonGallery";

const Productos = () => {
  // Utiliser l'état pour stocker les photos actuellement affichées
  const [visiblePhotos, setVisiblePhotos] = useState([]);

  // Fonction pour sélectionner aléatoirement trois photos différentes
  const getRandomPhotos = () => {
    const shuffled = photosData
      .filter((photo) => photo.producto === "producto")
      .sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Utiliser useEffect pour mettre à jour les photos toutes les 10 secondes
  useEffect(() => {
    // Initialiser les photos visibles avec trois photos aléatoires
    setVisiblePhotos(getRandomPhotos());

    // Mettre à jour les photos toutes les 10 secondes
    const intervalId = setInterval(() => {
      setVisiblePhotos(getRandomPhotos());
    }, 5000);

    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="section-productos-home">
      <div className="div-title-nosotros" style={{ paddingBottom: "1.5rem" }}>
        <h2 className="title-nosotros">Productos</h2>
      </div>
      <div className="div-img-productos">
        {visiblePhotos.map((photo) => (
          <div className="background-img-home" key={photo.id}>
            <img
              className="img-home-carousel"
              src={photo.img}
              alt={photo.infos}
            />
            <p data-fulltext={photo.infos}>{photo.infos}</p>
          </div>
        ))}
      </div>
      <ButtonGallery />
    </section>
  );
};

export default Productos;
