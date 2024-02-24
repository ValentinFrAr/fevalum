import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "La empresa", path: "/empresa" },
    { label: "Contacto", path: "/contacto" },
    { label: "Galería", path: "/galeria" },
  ];

  return (
    <header>
      <div className="text-center nav-logo">
        <Link className="nav-title mx-auto" to="/">
          FEVALUM
        </Link>
      </div>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid mx-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-auto"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav mx-auto d-flex justify-content-around">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    activeLink === index ? "nav-active" : ""
                  }`}
                >
                  <Link
                    className="nav-link"
                    to={item.path}
                    onClick={() => handleLinkClick(index)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
