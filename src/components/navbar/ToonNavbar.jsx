import React from 'react'
import './toonNavbar.css'
import { useCallback, useState } from 'react'

import twitterIcon from '../../assets/twittervector.svg'
import discordIcon from '../../assets/discordvector.svg'
import instagramIcon from '../../assets/instagram.svg'
import openseaIcon from '../../assets/opensea.svg'
import clearHead from '../../assets/dface_web.png'
import mobileMenuClosed from '../../assets/closed.png'
import mobileMenuOpened from '../../assets/open.png'

const ToonNavbar = () => {
  const onTwitterContainerClick = useCallback(() => {
    window.open('https://twitter.com/Diablitoons')
  }, [])

  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  const mobileMenu = isPanelOpen ? mobileMenuOpened : mobileMenuClosed;
  return (
    <header>
      <div className="nav-container">
        {/* Nav logo */}

        <div className="menu-row">
          <div className="logo-head">
            <img className="head-logo" alt="" src={clearHead} />
          </div>
          <div className="menu-btn" onClick={() => togglePanel()}>
            <img className="menu-icon" alt="" src={mobileMenu} />
          </div>
        </div>

        <div className="nav-main">
          <div className="nav-group">
            {/* Nav titles */}
            <div className="nav-text">
              <div>Home</div>
              <div>About</div>
              <div>Goals</div>
              <div>Team</div>
              <div>FAQ</div>
              <div className='medium'>Medium</div>
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

        <div className={`panel ${isPanelOpen ? 'open' : ''}`}>
          <div className="panel-content">
            <div className="menu-column">
              <div className='panel-title-text'>Diablitoons</div>
            </div>

            <div className="nav-main-panel">
              <div className="nav-group-panel">
                {/* Nav titles Panel */}
                <div className="nav-text-panel">
                  <div>Home</div>
                  <div>About</div>
                  <div>Goals</div>
                  <div>Team</div>
                  <div>Facts </div>
                  <div> Medium</div>
                </div>
                {/* Connect wallet Panel */}
                <div className="connect-wallet-panel">
                  <div className="home">Connect wallet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ToonNavbar
