import './style/App.css';
import LandingSection from './LandingSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';

function App() {
  return (
    <div className='main-container'>
    <LandingSection/>
    <AboutSection/>
    <ProjectSection/>
    </div>
  );
}

export default App;
