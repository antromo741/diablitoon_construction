import './App.css';
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';
import { useState } from 'react'
import videoWalk from './assets/toonwalk.mp4'

function App() {
  const [showText, setShowText] = useState(false)

  const handleVideoEnd = () => {
    setShowText(true);
    document.getElementById("video-container").style.zIndex = "-1";
  };

  return (
    <div className="App">
      <div className='main-page'>
        {showText ? (
          <div className={showText ? "textVisible" : "text"}>
            <ToonNavbar />
            <AnimatedText />
          </div>
        ) : (
          <video
            className={showText ? "videoHidden" : "video"}
            src={videoWalk}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          />
        )}
      </div>
    </div>
  );
}

export default App;