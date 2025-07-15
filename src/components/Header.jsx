import React, { useState } from 'react';
import './Header.css';
import logoImage from '../assets/react.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </div>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
            <li><a href="#experiencia-timeline" onClick={() => setIsOpen(false)}>Experiencia</a></li>
            <li><a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a></li>
            <li><a href="#tecnologias" onClick={() => setIsOpen(false)}>Tecnologías</a></li>
            <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li> {/* Asumiendo una sección de Contacto si quieres */}
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;