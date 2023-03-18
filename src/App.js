import './App.css';
import { useState } from 'react';
import desktopVideo from './assets/desktopVid.mp4';
import mobileVid from './assets/mobileVid.mp4'
import toon from './assets/toon.gif'
import poster from "./assets/bg.png"
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';
import { BiVolumeMute } from 'react-icons/bi'
import { VscUnmute } from 'react-icons/vsc'

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

  const videoSrc = isMobile ? mobileVid : desktopVideo;

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
            <video
              className={showText ? "videoHidden" : "video"}
              src={videoSrc}
              type="video/mp4"
              preload
              playsInline
              poster={poster}
              controls
              muted={isMuted}
              onEnded={handleVideoEnd}
            />

          {isMuted ? <div onClick={handleToggleMute}><BiVolumeMute className='sound-icon' /></div> : <div onClick={handleToggleMute}><VscUnmute className="sound-icon" /></div>}

        </div>

      </div>
    </div>
  );
}

export default App;
