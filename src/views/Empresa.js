import React from "react";
import Footer from "../components/Footer";

const Empresa = () => {
  return (
    <>
      <main className="main-empresa">
        <h1>
          <span className="span-fev">FEVALUM</span> - Compromiso y Reglas
        </h1>

        <p>
          FEVALUM, empresa líder con dos décadas de experiencia en el sector de
          la carpintería de aluminio, se distingue por su compromiso
          inquebrantable con la excelencia en la fabricación de productos de la
          más alta calidad. Nuestra dedicación a la perfección técnica y al
          cuidado de los detalles ha sido el pilar fundamental de nuestro éxito
          continuo.
        </p>

        <p>
          Desde nuestros inicios, nos hemos regido por valores sólidos y
          principios éticos que han forjado la identidad de FEVALUM. La
          integridad, la transparencia y el compromiso con la satisfacción del
          cliente son los cimientos sobre los cuales construimos cada proyecto.
          La calidad de nuestros productos y servicios es el resultado directo
          de un equipo apasionado y altamente capacitado, respaldado por
          tecnología de vanguardia.
        </p>

        <p>
          Entendemos la importancia de la confianza depositada por nuestros
          clientes y, por lo tanto, nos enorgullece comunicar claramente
          nuestras políticas.
        </p>

        <h2>Reglas de la Empresa:</h2>
        <ul>
          <li>
            Una vez cerrado el presupuesto, se requiere el pago del 100% para
            cancelar el precio o 70% inicial en forma de seña y el 30% restante
            será contra entrega; pudiendo ajustarse dicho porcentaje (30%) según
            la tasa de inflación.
          </li>
          <li>
            Cualquier modificación en las medidas, después de la confirmación
            del presupuesto, estará sujeta a un cambio en el precio, sin
            posibilidad de reembolso una vez que se haya realizado el pedido de
            los materiales.
          </li>
          <li>
            La finalización de cualquier trabajo conlleva la obligación de
            retirarlo en el plazo acordado previamente con el cliente; de lo
            contrario, nos reservamos el derecho de aplicar el 1% diario sobre
            el total del presupuesto por costo de almacenaje.
          </li>
        </ul>

        <p>
          Cada proyecto es una colaboración única, y nos esforzamos por brindar
          soluciones a medida que superen las expectativas. Agradecemos
          sinceramente a nuestros valiosos clientes por su continuo apoyo y
          comprensión. El crecimiento y éxito de FEVALUM se deben a la confianza
          depositada en nosotros, y reiteramos nuestro compromiso de mantener
          los más altos estándares en cada aspecto de nuestro trabajo.
        </p>

        <footer>
          Con estima, <br /> El equipo de FEVALUM
        </footer>
      </main>
      <Footer />
    </>
  );
};

export default Empresa;
