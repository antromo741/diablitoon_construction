import './App.css';
import { useState } from 'react';
import videoWalk from './assets/introvid.mp4';
import ToonNavbar from './components/navbar/ToonNavbar';
import AnimatedText from './components/animatedText/AnimatedText';

function App() {
  const [showText, setShowText] = useState(false);

  const handleVideoEnd = () => {
    setShowText(true);
  };

  return (
    <div className="App">
      <div className='main-page'>
        <video
          className={showText ? "videoHidden" : "video"}
          src={videoWalk}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
        <div className={showText ? "textVisible" : 'textHidden'}>
          <ToonNavbar />
          <AnimatedText />
        </div>
      </div>
    </div>
  );
}

export default App;
