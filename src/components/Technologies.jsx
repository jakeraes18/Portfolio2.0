import React from 'react';
import './Technologies.css';

const TechnologyChip = ({ name }) => {
  return (
    <div className="technology-chip">
      {name}
    </div>
  );
};

const Technologies = () => {
  const frontendTech = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Sass'];
  const backendTech = ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'Ruby on Rails', 'PHP', 'Laravel'];
  const databasesTech = ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server', 'Firebase'];
  const toolsTech = ['Git', 'Docker', 'AWS', 'Netlify', 'Vercel', 'Jira'];

  return (
    <section id="tecnologias" className="technologies-section">
      <h2>Mis Tecnologías y Herramientas</h2>

      <h3>Frontend</h3>
      <div className="tech-grid">
        {frontendTech.map((tech, index) => (
          <TechnologyChip key={index} name={tech} />
        ))}
      </div>

      <h3>Backend</h3>
      <div className="tech-grid">
        {backendTech.map((tech, index) => (
          <TechnologyChip key={index} name={tech} />
        ))}
      </div>

      <h3>Bases de Datos</h3>
      <div className="tech-grid">
        {databasesTech.map((tech, index) => (
          <TechnologyChip key={index} name={tech} />
        ))}
      </div>

      <h3>Herramientas y DevOps</h3>
      <div className="tech-grid">
        {toolsTech.map((tech, index) => (
          <TechnologyChip key={index} name={tech} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;