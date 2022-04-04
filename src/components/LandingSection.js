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
              <a href="http://130.61.217.110:30000/"><img src={dice} alt="dice" /></a>
              <a href="mailto:michal.ruta.1996@gmail.com"><img src={mail} alt="mail" /></a>
              <a href="https://www.linkedin.com/in/michalruta/"><img src={linkedin} alt="linkedin" /></a>
              <a href="https://www.github.com/ruta96"><img src={github} alt="github" /></a>
            </div>
            <img src={openCurlyBracket} alt="bracket" className='curly-bracket open-curly-bracket'/>
            <div className='logo'>
                <img src={logoback} alt="logo" className='logo-back'/>
                <img src={logomain} alt="logo" className='logo-front'/>
            </div>
            <div className='skill skill-js'>JavaScript</div>
            <div className='skill skill-html'>HTML</div>
            <div className='skill skill-git'>GIT</div>
            <div className='skill skill-gsap'>GSAP</div>
            <div className='skill skill-es6'>ES6</div>
            <div className='skill skill-css'>CSS</div>
            <div className='skill skill-sass'>Sass</div>
            <div className='skill skill-react'>React</div>
            <div className='skill skill-photoshop'>Photoshop</div>
            <div className='skill skill-xd'>Adobe Xd</div>
            <div className="dash dash-1"></div>
            <img src={closeCurlyBracket} alt="bracket" className='close-curly-bracket'/>
        </div>
    </div>
  )
}

export default LandingSection