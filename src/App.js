import './App.css';
import { useCallback } from "react";
import videoBg from "./assets/toonwalk.mp4";
import twitterIcon from "./assets/twittervector.svg";
import discordIcon from "./assets/discordvector.svg";
import instagramIcon from "./assets/instagram.svg";
import openseaIcon from "./assets/opensea.svg";
import headLogo from "./assets/group.svg"

function App() {
  const onTwitterContainerClick = useCallback(() => {
    window.open("https://twitter.com/Diablitoons");
  }, []);

  return (
    <div className="App">
      <div className='home-construction-2'>
      {/* App Header */}
      <header>
        <div className='nav-container'>

          {/* Nav logo */}
          <div className="logo-head">
            <img className="head-logo" alt="" src={headLogo} />
          </div>

          <div className="nav-main">
            <div className="nav-group">

              {/* Nav titles */}
              <div className="nav-text">
                <div>Home</div>
                <div>{`About`}</div>
                <div>Goals</div>
                <div>Team</div>
                <div>Facts </div>
                <div> Medium</div>
              </div>

              {/* Connect wallet */}
              <div className="connect-wallet">
                <div className="home">Connect wallet</div>
              </div>
            </div>
          </div>

          {/* Social media */}
          <div className="social-header">
            <img className="discord-icon" alt="" src={discordIcon} />
            <img className="twitter-icon" alt="" src={twitterIcon} onClick={onTwitterContainerClick} />
            <img className="instagram-icon" alt="" src={instagramIcon} />
            <img className="opensea-icon" alt="" src={openseaIcon} />
          </div>

        </div>
      </header>

      <main>
        {/* The video background, need to add an icon for aound*/}
        {/*  <video className="" src={videoBg} autoPlay loop muted /> */}
        <section>
          <div className="diablitoons-text-container">
            <div className='diablitoons-text-main'>
              <div className="diablitoons-text-start">{`Diablitoons is `}</div>
            </div>
            {/* Need to set up the revolving wheel and use these as props */}
            <div className="mezcal1">Mezcal</div>
           {/*  <div className="party1">Party</div>
            <div className="tacos1">Tacos</div>
            <div className="family1">Family</div>
            <div className="you1">YOU.</div>
            <div className="art1">Art</div> */}
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}

export default App;
