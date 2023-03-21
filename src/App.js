import './App.css';
import { useState, useRef, useEffect } from 'react';
import desktopVideo from './assets/desktopVid.mp4';
import newMobile from './assets/newMobile.mp4';
import toon from './assets/toon.gif';
import poster from "./assets/white-bg.png";
/* import dgifPoster from './assets/dgif.gif' */
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';
import SidePanel from './components/sidePanel/SidePanel';
import { BiVolumeMute } from 'react-icons/bi';
import { VscUnmute } from 'react-icons/vsc';
import Lottie from "lottie-react";
import animationData from './assets/dAnimation.json';

function App() {
  const [showText, setShowText] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showLottie, setShowLottie] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [playbackStarted, setPlaybackStarted] = useState(false);

  const handleVideoEnd = () => {
    setShowText(true);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };
  const handleLottieClick = () => {
    setShowLottie(false);
    videoRef.current.play();
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  const isMobile = window.matchMedia('(max-width: 850px)').matches;

  const videoSrc = isMobile ? newMobile : desktopVideo;
  const videoRef = useRef(videoSrc);

  useEffect(() => {
    if (videoRef.current.paused && !playbackStarted && showLottie === false) {
      videoRef.current.play();
      setPlaybackStarted(true);
    }
  }, [playbackStarted, showLottie]);

  return (
    <div className="App">
      <SidePanel isPanelOpen={isPanelOpen} />

      <div className='divHeader'>
        <ToonNavbar togglePanel={togglePanel} isPanelOpen={isPanelOpen} />
      </div>

      <div className={showText ? "videoContainer-hidden" : "videoContainer"} >
        {showLottie && (
          <div className="lottie-container">
            <div className="clickable-area" onClick={handleLottieClick}></div>
            <Lottie className='lottie' animationData={animationData} loop={true} onClick={handleLottieClick} />
          </div>
        )}
        <div className="video-border" onClick={handleLottieClick}>
          <video
            className="video"
            src={videoSrc}
            type="video/mp4"
            preload="true"
            playsInline
            poster={poster}
            controls
            muted={isMuted}
            onEnded={handleVideoEnd}
            ref={videoRef}
            onPlay={handleLottieClick}
            onClick={handleLottieClick}
          />
        </div>
        {isMuted ? <div onClick={handleToggleMute}><BiVolumeMute className='sound-icon' /></div> : <div onClick={handleToggleMute}><VscUnmute className="sound-icon" /></div>}
      </div>
      <div className='main-page'>
        <div className={showText ? "textVisible" : 'textHidden'}>
          <AnimatedText />
        </div>
        <div className={showText ? "toon-gif-container-visible" : "toon-gif-container-hidden"}>
          <img src={toon} alt="toon-gif" className="toon-gif" />
        </div>
      </div>
    </div>
  );
}

export default App;
