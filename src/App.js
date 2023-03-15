import './App.css';
import { useState } from 'react';
import desktopVideo from './assets/introvid.mp4';
/* import mobileVideo from "./assets/cropped/11.mp4"; */
import mobileVideo from "./assets/mobileVid.mp4";
import toon from './assets/toon.gif'
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';
import { BiVolumeMute } from 'react-icons/bi'

function App() {
  const [showText, setShowText] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setShowText(true);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const isMobile = window.matchMedia('(max-width: 800px)').matches;

  const videoSrc = isMobile ? mobileVideo : desktopVideo;

  return (
    <div className="App">
      <div className='divHeader'>
        <ToonNavbar />
      </div>
      <div className='main-page'>

        <div className={showText ? "textVisible" : 'textHidden'}>
          <AnimatedText />
        </div>

        <div className={showText ? "toon-gif-container-visible" : "toon-gif-container-hidden"}>
          <img src={toon} alt="toon-gif" className="toon-gif" />
        </div>

        <div className={showText ? "videoHidden" : "video"} >
          <video className={showText ? "videoHidden" : "video"}
            src={videoSrc}
            autoPlay
            muted={isMuted}
            onEnded={handleVideoEnd}
          />

          {isMuted ? <div className="sound-icon" onClick={handleToggleMute}><BiVolumeMute /></div> : <div className="sound-icon" onClick={handleToggleMute}><BiVolumeMute /></div>}

        </div>

      </div>
    </div>
  );
}

export default App;
