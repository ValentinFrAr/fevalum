import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className="nosotros" id="nosotros">
      <div className="div-title-nosotros pb-3">
        <h2 className="title-nosotros ">Nosotros</h2>
      </div>
      <div className="nosotros-first">
        <img
          src="https://i.ibb.co/7p5Gp9G/nosotros.jpg"
          alt="nosotros"
          className="img-about"
        />
        <div className="desc-nosotros">
          <p className="fw-bold">
            FEVALUM, empresa con más de dos décadas de experiencia en el sector
            de la carpintería de aluminio, se distingue por su compromiso
            inquebrantable con la excelencia en la fabricación y colocación de
            productos de la más alta calidad. Nuestra dedicación a la perfección
            técnica y estética ha sido el pilar fundamental de nuestro éxito
            continuo.
          </p>
        </div>
      </div>
      <div className="mt-2 w-50  text-center btn-gallery btn-nosotros">
        <Link to="/empresa">
          <button>Leer más</button>
        </Link>
      </div>
    </div>
  );
};

export default Nosotros;
