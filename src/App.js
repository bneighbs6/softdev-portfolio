import './App.css';
import Header from "../src/components/Header";
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <div className="headerAndIntroBackground">
        <div className="header">
          <Header />
        </div>
        <div className="intro">
          <Intro />
        </div>
      </div>

      <div className="about-me-container">
        <div className="about-me">
          <AboutMe />
        </div>
      </div>

      <div className="techonologies-container">
        <div className="technologies">
          <Technologies />
        </div>
      </div>

      <div className="certficates-container">
        <div className="certificates">
          <Certificates />
        </div>
      </div>

      <div className="projects-container">
        <div className="projects">
          <Projects />
        </div>
      </div>

      <div className="connect-container">
        <div className="connect">
          <Connect />
        </div>
      </div>
    </div>
  );
}

export default App;
