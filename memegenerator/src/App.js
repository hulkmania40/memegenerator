import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
// import ReactGA from 'react-ga';

function App() {
  // ReactGA.initialize('G-0VWJ1VZZWW');
  // ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className='container-fluid'>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
