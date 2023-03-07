import './App.css';
import { useState } from 'react';
import videoWalk from './assets/introvid.mp4';
import toon from './assets/toon.gif'
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';

function App() {
  const [showText, setShowText] = useState(false);

  const handleVideoEnd = () => {
    setShowText(true);
  };

  return (
    <div className="App">
      <div className='divHeader'>
        <ToonNavbar />
      </div>
      <div className='main-page'>
        <div className={showText ? "textVisible" : 'textHidden'}>
          <AnimatedText />
        </div>

        <div className="toon-gif-container">
          <img src={toon} alt="toon-gif" className="toon-gif" />
        </div>

        <div >
          <video className={showText ? "videoHidden" : "video"}
            src={videoWalk}
            autoPlay
            muted
            onEnded={handleVideoEnd}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
