import React from 'react';
import './Experience.css';

const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Frontend Senior',
      company: 'Tech Solutions Inc.',
      duration: 'Enero 2022 - Presente',
      description: 'Lideré el desarrollo de interfaces de usuario responsivas utilizando React, Next.js y Tailwind CSS. Colaboré estrechamente con equipos de diseño y backend para entregar productos de alta calidad.',
    },
    {
      title: 'Desarrollador Web Jr.',
      company: 'Innovate Digital',
      duration: 'Julio 2019 - Diciembre 2021',
      description: 'Participé en el diseño y la implementación de funcionalidades web con HTML, CSS, JavaScript y React. Contribuí a la optimización de rendimiento y la mejora de la experiencia de usuario.',
    },
    // Agrega más experiencias aquí
  ];

  return (
    <section id="experiencia" className="experience-section">
      <h2>Experiencia Laboral</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;