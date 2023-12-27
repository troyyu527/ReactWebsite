import React from 'react';
import CSlide from './CSlide';
import '../css/proj_slide.css';
import '../css/photo_style.css';
import { projectDataCS } from '../projectData';
function WebApps(props) {
  //const {name,pos,currentPlayer} = props
  
  
  return (
    <div className='page'>
      <div className="projects">
        {projectDataCS.map((project,index)=>(
          <CSlide key={index} project={project} />
        ))}
      </div>  
    </div>
    
  )
}

export default WebApps