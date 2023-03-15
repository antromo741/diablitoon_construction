import React from 'react'
import './animatedText.css'
import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [showCookingText, setShowCookingText] = useState(false)

  const words = ['Art', 'Mezcal', 'Party', 'Tacos', 'Family', 'YOU.']
  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex === words.length - 1) {
        setShowCookingText(true)
        setTimeout(() => {
          setShowCookingText(false)
          setWordIndex(0)
        }, 2000)
      } else {
        setWordIndex((prevIndex) => prevIndex + 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <main>
      <section>
        <div className="diablitoons-container">
          <div className="diablitoons-text-main">
            <div
              className={` ${
                showCookingText ? 'switch-text-start' : 'diablitoons-text-start'
              }`}
            >
              {showCookingText ? 'Cooking' : `Diablitoons is`}
            </div>

            <div className={`${showCookingText ? 'switch-text' : 'mezcal1'}`}>
              {showCookingText ? 'up juicy stuff' : words[wordIndex]}
            </div>
          </div>
          <div className="sub-column">
            <div className="diablitoon-sub-header">
              <strong>Mexican avatar </strong> project of
              <strong> 13,333 </strong> little <strong>Diablitos </strong>
              pushing the boundaries of <strong> art, culture </strong>and
              <strong> technology.</strong>
            </div>
            <div className="minting-soon">
              <div className="home">Minting soon</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AnimatedText
