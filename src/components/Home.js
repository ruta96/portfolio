import React from 'react';
import LandingSection from './LandingSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';

function Index() {
  return (
    <div className='main-container'>
    <LandingSection/>
    <AboutSection/>
    <ProjectSection/>
    </div>
  )
}

export default Index