import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Íconos de marca
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const myEmail = 'jake.raes18@gmail.com';
  
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hola, soy Jason Ramirez</h1>
          <h2>Desarrollador Web Full Stack</h2>
          <p>
            Con mas de 3 años de experiencia, trabajando en proyectos para empresas medianas y grandes. 
            En mi experiencia, he trabajado con las tecnologías FrontEnd como HTML, CSS y JavaScript, 
            así como sus frameworks como SASS y NodeJS y metodología ágil como SCRUM.
          </p>
          <p>
            En lo largo de
            mi carrera profesional, he terminado cursos para reforzar mis conocimientos de Desarrollo Web 
            en Udemy y JavaScript en Coderhouse. Tengo experiencia desarrollando aplicaciones web 
            con bases de datos en MySQL, manejando la operación de CRUD (Créate, Read, Update, Delete), 
            para la función de inventariado.
          </p>
          <div className="social-icons">
              <a href="www.linkedin.com/in/jason-ramirez-72b255158" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/jakeraes18" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={`mailto:${myEmail}`} className="social-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
        </div>
        <div className="hero-image-container">
          <img src={profilePic} alt="Tu foto de perfil" className="hero-profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;