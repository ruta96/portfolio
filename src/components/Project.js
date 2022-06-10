import React from 'react';
import './style/ProjectSection.css';  
import js from '../static/js.svg';
import css from '../static/css.svg';
import html from '../static/html.svg';
import react from '../static/react.svg';
import scss from '../static/scss.svg';
import node from '../static/node.svg';
import bootstrap from '../static/bootstrap.svg';
import es6 from '../static/es6.svg';

function Project(props) {
  return (
    <>
    <a href={props.link} target="_blank" rel="noreferrer">
    <div className='project-gallery-item'>
        {props.js ? <img src={js} alt="project" className='gallery-item-image active-image' /> : <img src={js} alt="project" className='gallery-item-image' />}
        {props.css ? <img src={css} alt="project" className='gallery-item-image active-image' /> : <img src={css} alt="project" className='gallery-item-image' />}
        {props.html ? <img src={html} alt="project" className='gallery-item-image active-image' /> : <img src={html} alt="project" className='gallery-item-image' />}
        {props.scss ? <img src={scss} alt="project" className='gallery-item-image active-image' /> : <img src={scss} alt="project" className='gallery-item-image' />}
        {props.react ? <img src={react} alt="project" className='gallery-item-image active-image' /> : <img src={react} alt="project" className='gallery-item-image' />}
        {props.node ? <img src={node} alt="project" className='gallery-item-image active-image' /> : <img src={node} alt="project" className='gallery-item-image' />}
        {props.bootstrap ? <img src={bootstrap} alt="project" className='gallery-item-image active-image' /> : <img src={bootstrap} alt="project" className='gallery-item-image' />}
        {props.es6 ? <img src={es6} alt="project" className='gallery-item-image active-image' /> : <img src={es6} alt="project" className='gallery-item-image' />}
        <div className='gallery-item-text'>{props.name}</div>
    </div>
    </a>
    </>
  )
}

export default Project