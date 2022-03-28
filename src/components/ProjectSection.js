import React from 'react';
import './style/ProjectSection.css';
import triangleLeft from '../static/triangle-left.svg';
import triangleRight from '../static/triangle-right.svg';
import dice from '../static/dice.svg'

function ProjectSection() {
  return (
    <div className='project-wrapper'>    
        <img src={triangleLeft} alt="triangle" className='project-triangle project-triangle-left'/>
        <img src={triangleRight} alt="triangle" className='project-triangle project-triangle-right'/>
        <div className='project-section'>
            <div className='project-braces project-braces-open'>&#123;</div>
            <div className='project-gallery'>
                <div className='project-gallery-item'>
                    <img src={dice} alt="project" className='gallery-item-image' />
                    <div className='gallery-item-text'>lorem ipsum</div>
                </div>
                <div className='project-gallery-item'>
                    <img src={dice} alt="project" className='gallery-item-image' />
                    <div className='gallery-item-text'>lorem ipsum</div>
                </div>
                <div className='project-gallery-item'>
                    <img src={dice} alt="project" className='gallery-item-image' />
                    <div className='gallery-item-text'>lorem ipsum</div>
                </div>
                <div className='project-gallery-item'>
                    <img src={dice} alt="project" className='gallery-item-image' />
                    <div className='gallery-item-text'>lorem ipsum</div>
                </div>
            </div>
            <div className='project-braces project-braces-close'>&#125;</div>
        </div>
    </div>
  )
}

export default ProjectSection