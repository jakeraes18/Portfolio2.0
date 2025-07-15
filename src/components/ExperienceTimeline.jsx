import React from 'react';
import './ExperienceTimeline.css'; // Asegúrate de crear este archivo CSS

// Componente para un solo item en la línea de tiempo
const TimelineItem = ({ year, title, company, description }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div> {/* Punto en la línea */}
    <div className="timeline-content">
      <span className="timeline-year">{year}</span>
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-company">{company}</p>
      <ul className="timeline-description-list">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Componente principal de la línea de tiempo
const ExperienceTimeline = () => {
  const experiences = [
    {
      year: 'Enero 2025 - Junio 2025',
      title: 'Desarrollador Cells',
      company: 'GoNet Orion Innovation',
      description: [
        'Desarrollo de aplicaciondes web con LitElement.'
      ]
    },
    {
      year: 'Julio 2020 - Enero 2025',
      title: 'Desarrollador Web Frontend',
      company: 'Grupo Salinas',
      description: [
        'Diseño y maquetacion de landing pages y sitios web responsivos.',
        'Manejo de herramientas como VSCode, HTML, CSS, JavaScript y SASS.',
        'Herramientas de diseño como Adobe XD, Illustrator y Photoshop.',
        'Colaboración en equipo utilizando metodologías ágiles como SCRUM.',
      ]
    },
    {
      year: 'Enero 2020 - Mayo 2020',
      title: 'Desarrollador Web Jr.',
      company: 'SIENERC',
      description: [
        'Proyecto de desarrollo en pagina web ingresando con un login conectado a una base de datos MySQL.',
        'Manejo de tecnologías como HTML, CSS, JavaScript y PHP.',
        'Implementación de CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de inventario.'
      ]
    }
  ].sort((a, b) => { // Opcional: ordenar cronológicamente si no están ordenados
      const yearA = parseInt(a.year.split(' ')[0]);
      const yearB = parseInt(b.year.split(' ')[0]);
      return yearB - yearA; // Del más reciente al más antiguo
  });

  return (
    <section id="experiencia-timeline" className="experience-timeline-section">
      <h2>Mi Trayectoria Profesional</h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;