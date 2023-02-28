import logo from './logo.svg';
import './App.css';
import { useCallback } from "react";
import videoBg from "./assets/toonwalk.mp4"

function App() {
  const onTwitterContainerClick = useCallback(() => {
    window.open("https://twitter.com/Diablitoons");
  }, []);

  return (
    <div className="App">
      <div className='home-construction-2"'>
        <header className="App-header">
          <div className="x1080-whitebg-gif-1-group">
            {/* The video background to play with sound the user needs to click*/}
            <video className="x1080-whitebg-gif-11" src={videoBg} autoPlay loop muted />
            {/* Social media */}
            <div className="social-header1">
              <div className="discord1">
                <img className="vector-icon2" alt="" src="../vector.svg" />
              </div>
              <div className="twitter1" onClick={onTwitterContainerClick}>
                <img className="vector-icon3" alt="" src="../vector3.svg" />
              </div>
              <img className="instagram-icon1" alt="" src="../instagram1.svg" />
              <img className="opensea-icon1" alt="" src="../opensea1.svg" />
            </div>
            {/* Logo and the top nav bar */}
            <div className="logo-head1">
              <img className="group-icon1" alt="" src="../group1.svg" />
            </div>
            <div className="header-main1">
              <div className="header-group">
                <div className="header1">
                  <div className="home2">
                    <div className="home3">Home</div>
                  </div>
                  <div className="home2">
                    <div className="home3">{`About `}</div>
                  </div>
                  <div className="home2">
                    <div className="home3">Goals</div>
                  </div>
                  <div className="home2">
                    <div className="home3">Team</div>
                  </div>
                  <div className="home2">
                    <div className="home3">Facts</div>
                  </div>
                  <div className="medium2">
                    <div className="home3">Medium</div>
                  </div>
                </div>
                <div className="header-button1">
                  <div className="home3">Connect wallet</div>
                </div>
              </div>
            </div>
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* add body */}
        <div className="diablitoons-is3">
          <div className="diablitoons-is4">
            <div className="diablitoons-is5">{`Diablitoons is `}</div>
          </div>
          {/* Need to set up the revolving wheel and use these as props */}
          <div className="mezcal1">Mezcal</div>
          <div className="party1">Party</div>
          <div className="tacos1">Tacos</div>
          <div className="family1">Family</div>
          <div className="you1">YOU.</div>
          <div className="art1">Art</div>
        </div>

      </div>
    </div>
  );
}

export default App;
