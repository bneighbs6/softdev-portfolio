import './App.css';
import Header from "../src/components/Header";
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';

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
        <div className="about-me">
          <AboutMe />
        </div>
        <div className='technologies'>
          <Technologies />
        </div>
    </div>
  );
}

export default App;
