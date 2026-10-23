import React from 'react';
import Slide from './Slide';
import '../css/proj_slide.css';
import '../css/photo_style.css';
import { projectDataBIM } from '../projectData';

function Projects() {
  return (
    <div className='page'>
      <header className="section-head">
        <span className="cs-topper">Engineering Portfolio</span>
        <h1 className="cs-title">BIM &amp; Construction Projects</h1>
        <p className="cs-text">
          Selected bridge, transit, and infrastructure projects across New York &amp; New Jersey —
          covering 3D pick planning, clash detection, site logistics, and construction simulation.
        </p>
      </header>
      <div className="projects">
        {projectDataBIM.map((project, index) => (
          <Slide key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
