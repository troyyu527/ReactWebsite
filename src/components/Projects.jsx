import React from 'react';
import Slide from './Slide';
import '../css/proj_slide.css';
import '../css/photo_style.css';
import { projectDataBIM } from '../projectData';

function Projects(props) {
  
  return (
    <div className='page'>
      <div className="projects">
        {projectDataBIM.map((project,index)=>(
          <Slide key={index} project={project} />
        ))}
      </div>  
    </div> 
  )
}

export default Projects