import React from 'react'
import './toonNavbar.css'
import { useCallback } from 'react'

import twitterIcon from '../../assets/twittervector.svg'
import discordIcon from '../../assets/discordvector.svg'
import instagramIcon from '../../assets/instagram.svg'
import openseaIcon from '../../assets/opensea.svg'
import clearHead from '../../assets/dface_web.png'
import mobileMenuClosed from '../../assets/closed.png'
import mobileMenuOpened from '../../assets/open.png'

const ToonNavbar = ({togglePanel, isPanelOpen}) => {
  const onTwitterContainerClick = useCallback(() => {
    window.open('https://twitter.com/Diablitoons')
  }, [])

  const handleClick = () => {
    togglePanel();
  };

  const mobileMenu = isPanelOpen ? mobileMenuOpened : mobileMenuClosed;
  return (
    <header>
     
      <div className="nav-container">
       
          <div className="logo-head">
            <img className="head-logo" alt="" src={clearHead} />
          </div>
          <div className="menu-btn" onClick={handleClick}>
            <img className="menu-icon" alt="" src={mobileMenu} />
          </div>
        
        <div className="nav-main">
          <div className="nav-group">
            <div className="nav-text">
              <div>Home</div>
              <div>About</div>
              <div>Goals</div>
              <div>Team</div>
              <div>FAQ</div>
              <div className='medium'>Medium</div>
            </div>
            <div className="connect-wallet">
              <div className="home">Connect wallet</div>
            </div>
          </div>
        </div>
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


 /*  */