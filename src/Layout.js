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
          phoneNumber="+54 11 5126-1970"
          accountName="FEVALUM"
          chatMessage="Hola, decíme cómo puedo ayudarte!"
          placeholder="Hola, me gustaría..."
          messageDelay={0}
          statusMessage="Responde en menos de 20 minutos"
          darkMode={false}
          buttonStyle={{ position: "fixed", bottom: "5rem", right: "20px" }}
          avatar="https://imgs.search.brave.com/8_RnHAeG_pG-VaVVzjzMCYWXPNPs6Jmvqs2ONQN9PM8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/OTE0OTU1OC9lcy92/ZWN0b3IvaWNvbm8t/ZGUtdmVudGFuYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZjRkeG82Z2V2blkz/YmZFc21PMW45dzZW/VWVFdTRfX1ViS1Q3/TnNUUW56WT0"
        />
        <ArrowToTop />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
