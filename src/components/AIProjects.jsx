import React from 'react';
import CSlide from './CSlide';
import '../css/proj_slide.css';
import '../css/photo_style.css';
import { projectDataAI } from '../projectData';

function AIProjects() {
  return (
    <div className='page'>
      <header className="section-head">
        <span className="cs-topper">LLMs &amp; Agents</span>
        <h1 className="cs-title">AI Projects</h1>
        <p className="cs-text">
          Bringing LLMs into real work: a retrieval-augmented assistant that answers questions about my career, and
          an agent platform that brings AI into BIM coordination with evidence and human approval.
        </p>
      </header>
      <div className="projects">
        {projectDataAI.map((project, index) => (
          <CSlide key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default AIProjects
