import './App.css';
import { useState, lazy, Suspense} from 'react';
import videoWalk from './assets/introvid.mp4';

function App() {
  const [showText, setShowText] = useState(false);

  const handleVideoEnd = () => {
    setShowText(true);
  };
  

  const ToonNavbar = lazy(() => import('./components/navbar/ToonNavbar'));
  const AnimatedText = lazy(() => import('./components/animatedText/AnimatedText'));
  

  return (
    <div className="App">
      <div className='main-page'>
        {showText ? (
          <div className={showText ? "textVisible" : 'text'}>
           <Suspense fallback={<div>Loading...</div>}>
              <ToonNavbar />
              <AnimatedText />
            </Suspense>
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
