import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Empresa from "./views/Empresa";
import Gallery from "./views/Gallery";
import Navbar from "./components/Navbar";
import ArrowToTop from "./components/ArrowToTop";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
          <Route path="/galeria" element={<Gallery />}></Route>
        </Routes>
        <FloatingWhatsApp
          phoneNumber="+54 11 3905-7104"
          accountName="FEVALUM"
          chatMessage="Hola, decíme cómo puedo ayudarte!"
          placeholder="Hola, me gustaría..."
          messageDelay={0}
          statusMessage="Responde en menos de 20 minutos"
          darkMode={false}
          buttonStyle={{ position: "fixed", bottom: "5rem", right: "20px" }}
          avatar="https://i.ibb.co/KXCH3c3/FEVALUM-new.jpg"
        />
        <ArrowToTop />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
