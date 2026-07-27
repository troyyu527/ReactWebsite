import React from 'react';
import CSlide from './CSlide';
import '../css/proj_slide.css';
import '../css/photo_style.css';
import { projectDataCS } from '../projectData';

function WebApps() {
  return (
    <div className='page'>
      <header className="section-head">
        <span className="cs-topper">Software &amp; Web</span>
        <h1 className="cs-title">Web Applications</h1>
        <p className="cs-text">
          Interactive web apps built with JavaScript, React, and D3 — from multiplayer games to
          algorithm visualizations. Each one is live; click <b>ENTER</b> to try it.
        </p>
      </header>
      <div className="projects">
        {projectDataCS.map((project, index) => (
          <CSlide key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default WebApps
