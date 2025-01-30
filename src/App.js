import './App.css';
import Header from "../src/components/Header";
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className='intro'>
        <Intro /> 
      </div>
    </div>
  );
}

export default App;
