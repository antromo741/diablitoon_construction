import React from 'react'
import './toonNavbar.css'
import { useCallback } from 'react'

import twitterIcon from '../../assets/twittervector.svg'
import discordIcon from '../../assets/discordvector.svg'
import instagramIcon from '../../assets/instagram.svg'
import openseaIcon from '../../assets/opensea.svg'
import headLogo from '../../assets/headlogo.svg';

const ToonNavbar = () => {
  const onTwitterContainerClick = useCallback(() => {
    window.open('https://twitter.com/Diablitoons')
  }, [])

  return (
    <header>
      <div className="nav-container">
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
          <img
            className="twitter-icon"
            alt=""
            src={twitterIcon}
            onClick={onTwitterContainerClick}
          />
          <img className="instagram-icon" alt="" src={instagramIcon} />
          <img className="opensea-icon" alt="" src={openseaIcon} />
        </div>
      </div>
    </header>
  )
}

export default ToonNavbar
