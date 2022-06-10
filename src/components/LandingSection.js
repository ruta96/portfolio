import React from 'react';
import './style/LandingSection.css';
import mail from '../static/mail.svg';
import linkedin from '../static/linkedin.svg';
import github from '../static/github.svg';
import logomain from '../static/logo-main.svg';
import logoback from '../static/logo-back.svg';
import dice from '../static/dice.svg';
import openCurlyBracket from '../static/open-curly-bracket.svg';
import closeCurlyBracket from '../static/close-curly-bracket.svg';

export const LandingSection = () => {
  return (
    <div className='landing-wrapper'>
        <div className='landing-section'>
            <div className='icon-bar'>
              <a href="http://foundry.ruciak.pl" target="_blank" rel="noreferrer"><img src={dice} alt="dice" /></a>
              <a href="mailto:michal.ruta.1996@gmail.com" target="_blank" rel="noreferrer"><img src={mail} alt="mail" /></a>
              <a href="https://www.linkedin.com/in/michalruta/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
              <a href="https://www.github.com/ruta96" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
            </div>
            <img src={openCurlyBracket} alt="bracket" className='curly-bracket open-curly-bracket'/>
            <div className='logo'>
                <img src={logoback} alt="logo" className='logo-back'/>
                <img src={logomain} alt="logo" className='logo-front'/>
            </div>
            <div className='skill skill-js'></div>
            <div className='skill skill-html'></div>
            <div className='skill skill-git'></div>
            <div className='skill skill-gsap'></div>
            <div className='skill skill-es6'></div>
            <div className='skill skill-css'></div>
            <div className='skill skill-sass'></div>
            <div className='skill skill-react'></div>
            <div className='skill skill-photoshop'></div>
            <div className='skill skill-xd'></div>
            <div className="dash dash-1"></div>
            <img src={closeCurlyBracket} alt="bracket" className='curly-bracket close-curly-bracket'/>
        </div>
    </div>
  )
}

export default LandingSection