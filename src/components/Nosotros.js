import React from "react";
import { useNavigate } from "react-router-dom";

const Nosotros = () => {
  let navigate = useNavigate();
  return (
    <section className="nosotros" id="nosotros">
      <div className="div-title-nosotros">
        <h2 className="title-nosotros">Nosotros</h2>
      </div>
      <div className="desc-nosotros pt-4">
        <p className="fw-bold text-nosotros">
          <span className="span-fev">FEVALUM</span>, empresa con dos décadas de
          experiencia en el sector de la carpintería de aluminio, se distingue
          por su compromiso inquebrantable con la excelencia en la fabricación
          de productos de la más alta calidad. Nuestra dedicación a la
          perfección técnica y al cuidado de los detalles ha sido el pilar
          fundamental de nuestro éxito continuo.
        </p>
      </div>
      <div>
        <button
          onClick={() => navigate("/empresa")}
          className="cssbuttons-io-button"
        >
          leer más
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Nosotros;
