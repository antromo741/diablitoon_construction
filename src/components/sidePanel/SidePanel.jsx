import React from 'react'
import './sidePanel.css'

const SidePanel = () => {
  return (
    <div className={`panel.open`}>
    <div className="panel-content">
      <div className="menu-column">
        <div className='panel-title-text'>Diablitoons</div>
      </div>
      <div className="nav-main-panel">
        <div className="nav-group-panel">
          <div className="nav-text-panel">
            <div>Home</div>
            <div>About</div>
            <div>Goals</div>
            <div>Team</div>
            <div>Facts </div>
            <div> Medium</div>
          </div>
          <div className="connect-wallet-panel">
            <div className="home">Connect wallet</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SidePanel