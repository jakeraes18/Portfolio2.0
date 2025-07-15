import React from 'react';
import { IconContext } from 'react-icons';
import './Skills.css';

const SkillCard = ({ name, type, icon: IconComponent }) => { 
  return (
    <div className="skill-card">
      <IconContext.Provider value={{ size: "5em", className: "skill-icon" }}>
        {IconComponent && <IconComponent />}
      </IconContext.Provider>
      <h4 className="skill-name">{name}</h4>
      <p className="skill-type">{type}</p>
    </div>
  );
};

export default SkillCard;