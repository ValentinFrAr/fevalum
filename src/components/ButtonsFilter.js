import React from "react";

const ButtonsFilter = ({ setActiveFilter, activeFilter }) => {
  const handleButtonClick = (category) => {
    setActiveFilter(category); // Mettre à jour le filtre actif avec la catégorie sélectionnée
  };

  return (
    <div className="content-buttons">
      <div>
        <button
          className={`btn-filter ${activeFilter === "puerta" ? "active" : ""}`} // Appliquer la classe 'active' si le filtre est 'puerta'
          onClick={() => handleButtonClick("puerta")}
        >
          Puertas
        </button>
      </div>
      <div>
        <button
          className={`btn-filter ${activeFilter === "ventana" ? "active" : ""}`} // Appliquer la classe 'active' si le filtre est 'ventana'
          onClick={() => handleButtonClick("ventana")}
        >
          Ventanas
        </button>
      </div>
      <div>
        <button
          className={`btn-filter ${
            activeFilter === "paño fijo" ? "active" : ""
          }`} // Appliquer la classe 'active' si le filtre est 'paño fijo'
          onClick={() => handleButtonClick("paño fijo")}
        >
          Paños fijos
        </button>
      </div>
      <div>
        <button
          className={`btn-filter ${activeFilter === "otro" ? "active" : ""}`} // Appliquer la classe 'active' si le filtre est 'otro'
          onClick={() => handleButtonClick("otro")}
        >
          otros
        </button>
      </div>
      <div>
        <button
          className={`btn-filter ${activeFilter === "" ? "active" : ""}`} // Appliquer la classe 'active' si le filtre est ''
          onClick={() => handleButtonClick("")} // Utilisez "" pour afficher tous les éléments
        >
          ver todo
        </button>
      </div>
    </div>
  );
};

export default ButtonsFilter;
