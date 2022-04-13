import React from 'react';
import './style/ProjectSection.css';
import triangleLeft from '../static/triangle-left.svg';
import triangleRight from '../static/triangle-right.svg';
import Project from './Project';

function ProjectSection() {
  return (
    <div className='project-wrapper'>    
        <img src={triangleLeft} alt="triangle" className='project-triangle project-triangle-left'/>
        <img src={triangleRight} alt="triangle" className='project-triangle project-triangle-right'/>
        <div className='project-section'>
            <div className='project-braces project-braces-open'>&#123;</div>
            <div className='project-gallery'>
                <Project name="okw-rutex" link="https://rutex.netlify.app" />
                <Project name="sabinakluz" link="https://sabinakluz.pl" />
                <Project name="lorem ipsum" link="#" />
                <Project name="lorem ipsum" link="#" />
            </div>
            <div className='project-braces project-braces-close'>&#125;</div>
        </div>
    </div>
  )
}

export default ProjectSection