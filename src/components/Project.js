import React from 'react';
import './style/ProjectSection.css';
import dice from '../static/dice.svg';

function Project(props) {
  return (
    <>
    <a href={props.link}>
    <div className='project-gallery-item'>
        <img src={dice} alt="project" className='gallery-item-image' />
        <div className='gallery-item-text'>{props.name}</div>
    </div>
    </a>
    </>
  )
}

export default Project