import React from 'react';
import './Projects.css';
import project1Image from '../assets/landingHackaton.png';
import project2Image from '../assets/Orders.jpg';
import project2Image from '../assets/PokeAPI.jpg';

const ProjectCard = ({ title, description, imageUrl, link, technologies }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech-chips">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Landing Page para Hackatón',
      description: 'Desarrollo de una landing page para un evento de hackatón, destacando los detalles del evento y facilitando el registro con un cronometro que cuando llegue a cero, desaparezca el registro.',
      imageUrl: project1Image,
      link: 'https://formulario-iota-three.vercel.app/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQLite'] 
    },
    {
      title: 'Sistema de ordenes llamado a un API',
      description: 'Desarrollo de un sistema de órdenes que se comunica con un API para gestionar pedidos, incluyendo funcionalidades de autenticación y autorización.',
      imageUrl: project2Image,
      link: 'https://prueba-devs.vercel.app/',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Axios']
    },
    {
      title: 'Pokedex con Angular',
      description: 'Sistema de busqueda de pokemones, donde puedes ver los detalles de cada uno y filtrarlos por tipo.',
      imageUrl: project2Image,
      link: 'https://jakeraes18-pokemon-api.vercel.app/',
      technologies: ['Angular', 'SASS', 'Typescript', 'Bootstrap', 'ZoneJS']
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section id="proyectos" className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;