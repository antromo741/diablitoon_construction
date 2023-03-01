import React from 'react'
import './animatedText.css'

const AnimatedText = () => {
  return (
    <main>
          <section>
            <div className="diablitoons-text-container">
              <div className='diablitoons-text-main'>
                <div className="diablitoons-text-start">{`Diablitoons is `}</div>
              </div>
              {/* Need to set up the revolving wheel and use these as props */}
              <div className="mezcal1">Mezcal</div>
            </div>
          </section>
        </main>
  )
}

export default AnimatedText