import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies/Technologies';
import Certificates from './components/Certificates';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect';


function App() {
  return (
    <div className="App xs-col-12">
      <div className="headerAndIntroBackground">
        <div className="header">
          <Header />
        </div>
        <div className="intro">
          <Intro />
        </div>
      </div>

      <div id="about" className="about-me-container">
        <div className="about-me">
          <AboutMe />
        </div>
      </div>

      <div id="technologies" className="techonologies-container">
        <div className="technologies">
          <Technologies />
        </div>
      </div>

      <div id="certificates" className="certficates-container">
        <div className="certificates">
          <Certificates />
        </div>
      </div>

      <div id="projects" className="projects-container">
        <div className="projects">
          <Projects />
        </div>
      </div>

      <div id="connect" className="connect-container">
        <div className="connect">
          <Connect />
        </div>
      </div>
    </div>
  );
}


export default App;
