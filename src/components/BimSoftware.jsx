import React from 'react';
import CSlide from './CSlide';
import '../css/proj_slide.css';
import '../css/photo_style.css';
import { projectDataBIMSoftware } from '../projectData';

function BimSoftware() {
  return (
    <div className='page'>
      <header className="section-head">
        <span className="cs-topper">Desktop &amp; openBIM</span>
        <h1 className="cs-title">BIM Software</h1>
        <p className="cs-text">
          Windows desktop tools for IFC / openBIM models, built in C#, WPF and xBIM — from viewing large building
          models to checking them against rules and comparing revisions.
        </p>
      </header>
      <div className="projects">
        {projectDataBIMSoftware.map((project, index) => (
          <CSlide key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default BimSoftware
