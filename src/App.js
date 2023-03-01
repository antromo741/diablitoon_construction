import './App.css';
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';

function App() {


  return (
    <div className="App">
      <div className='main-page'>
        {/* App Header */}
        <ToonNavbar />
        <AnimatedText />
      </div>
    </div>
  );
}

export default App;
  /* The video background, need to add an icon for aound*/
/*  <video className="" src={videoBg} autoPlay loop muted /> */