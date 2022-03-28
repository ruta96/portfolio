import React from 'react';
import './style/AboutSection.css';
import arrow from '../static/arrow.svg';

function AboutSection() {
  return (
    <div className='about-section'>
        <div className='about-name'>Hi, my name is <div className='about-name-light'>Michał</div></div>
        <div className='dash dash-2'></div>
        <div className='about-desc'> Web Developer | Content Creator | Game Master</div>
        <div className='about-check'>Check Out My Projects!</div>
        <img className='about-arrow' src={arrow} alt="arrow"/>
        <div className='dash dash-vertical dash-3'></div>
        <div className='dash dash-vertical dash-4'></div>
        <div className='dash dash-vertical dash-5'></div>
        <div className='dash dash-vertical dash-6'></div>
        <div className='dash dash-vertical dash-7'></div>
        <div className='dash dash-vertical dash-8'></div>
    </div>
  )
}

export default AboutSection;