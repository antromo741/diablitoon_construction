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
        <ToonNavbar /> 
         <div className={showText ? "textVisible" : 'textHidden'}>
            <AnimatedText />
          </div>
          <div className={showText ? "videoHidden" : "video"}>
            <video
              src={videoWalk}
              autoPlay
              muted
              onEnded={handleVideoEnd}
              style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
  );
}

export default App;
