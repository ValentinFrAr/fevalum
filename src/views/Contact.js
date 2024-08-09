/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import CopyableText from "../components/CopyableText";
import Footer from "../components/Footer";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  return (
    <>
      <main>
        <motion.div
          exit="out"
          animate="in"
          initial="out"
          variants={pageTransition}
          transition={{ duration: 0.7 }}
          className="contact"
        >
          <ContactForm />
          <div className="contact-infos">
            <div className="address me-5">
              <div className="content">
                <h4>Dirección</h4>
                <p>Santa Fe 863, Ezpeleta</p>
                <p>Buenos Aires</p>
              </div>
            </div>
            <div className="phone pt-3 me-5">
              <div className="content">
                <h4>Número de teléfono</h4>
                <CopyableText text="+54 11 5126-1970" />
                <CopyableText text="+54 11 3905-7104" />
              </div>
            </div>
            <div className="email pt-5 me-5">
              <div className="content">
                <h4>Correo electrónico</h4>
                <CopyableText text="fevalumcarpinteria@gmail.com" />
              </div>
            </div>
          </div>
          <div className="mx-auto iframe text-center">
            <div className="title-iframe">
              <h3>Para encontrarnos:</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.558674511234!2d-58.23486628902275!3d-34.741517064675115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f02fb9aefd1%3A0x7b2458b25750d0cd!2sSta.%20Fe%20863%2C%20Ezpeleta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sfr!2sar!4v1698172420637!5m2!1sfr!2sar"
              style={{ border: "0", marginBottom: "3rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Footer />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Contact;
