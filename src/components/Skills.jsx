import React, { useState } from 'react';
import SkillCard from './SkillCard';
import './Skills.css';

// Importa los íconos específicos de react-icons
// Puedes explorar más en https://react-icons.github.io/react-icons/
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiFigma, SiJest } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md'; // Para UI/UX Design

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const skillsData = [
    // Frontend
    { name: 'HTML5', type: 'Frontend', icon: FaHtml5 },
    { name: 'CSS3', type: 'Frontend', icon: FaCss3Alt },
    { name: 'JavaScript', type: 'Frontend', icon: FaJsSquare },
    { name: 'React', type: 'Frontend', icon: FaReact },
    { name: 'Responsive Design', type: 'Frontend', icon: MdDesignServices }, // Usando un ícono genérico para diseño
    { name: 'UI/UX Design', type: 'Frontend', icon: MdDesignServices },
    { name: 'TypeScript', type: 'Frontend', icon: SiTypescript },
    { name: 'Tailwind CSS', type: 'Frontend', icon: SiTailwindcss },
    { name: 'Next.js', type: 'Frontend', icon: SiNextdotjs },
    { name: 'Redux', type: 'Frontend', icon: SiRedux },
    { name: 'Figma', type: 'Frontend', icon: SiFigma },
    { name: 'Jest', type: 'Frontend', icon: SiJest },

    // Backend
    { name: 'Node.js', type: 'Backend', icon: FaNodeJs },
    { name: 'Express.js', type: 'Backend', icon: FaJsSquare }, // Reutilizando JS icon
    { name: 'Python', type: 'Backend', icon: FaPython },
    { name: 'MySQL', type: 'Backend', icon: SiMysql },
    { name: 'MongoDB', type: 'Backend', icon: SiMongodb },
    // Añade más habilidades Backend aquí

    // Herramientas (Tools)
    { name: 'Git', type: 'Tools', icon: FaGitAlt },
    { name: 'GitHub', type: 'Tools', icon: FaGitAlt }, // Reutilizando Git icon
    // Añade más herramientas aquí
  ];

  const filteredSkills = skillsData.filter(skill => skill.type === activeTab);

  return (
    <section id="habilidades" className="skills-section">
      <h2>Habilidades <span className="skills-icon-title">{'</>'}</span></h2> {/* Título de la sección */}
      <p className="skills-description">
        He trabajado con diversas tecnologías y herramientas a lo largo de mi experiencia. Estas son
        algunas de mis habilidades clave.
      </p>

      <div className="skills-tabs">
        <button
          className={`tab-button ${activeTab === 'Frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('Frontend')}
        >
          Frontend
        </button>
        <button
          className={`tab-button ${activeTab === 'Backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('Backend')}
        >
          Backend
        </button>
        <button
          className={`tab-button ${activeTab === 'Tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('Tools')}
        >
          Tools
        </button>
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;