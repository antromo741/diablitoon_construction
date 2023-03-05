import React from 'react'
import './animatedText.css'
import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [showCookingText, setShowCookingText] = useState(false)

  const words = ['Art', 'Mezcal', 'Party', 'Tacos', 'Family', 'YOU.']
/* Error withthe logic of what words show */
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
  }, [wordIndex, words.length])

  return (
    <main>
      <section>
        <div className="diablitoons-text-container">
          <div className="diablitoons-text-main">
            <div
              className={` ${
                showCookingText ? 'cooking-text-start' : 'diablitoons-text-start'
              }`}
            >
              {showCookingText ? 'Cooking' : `Diablitoons is`}
            </div>

            <div className={`${showCookingText ? 'cooking-text' : 'mezcal1'}`}>
              {showCookingText ? 'up juicy stuff' : words[wordIndex]}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AnimatedText

/* import React from 'react'
import './animatedText.css'
import { useState, useEffect } from 'react'
import videoWalk from '../../assets/toonwalk.mp4'

const AnimatedText = () => {
  const [showText, setShowText] = useState(false)

  const handleVideoEnd = () => {
    setShowText(true)
  }

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
  }, [wordIndex, words.length])

  return (
    <>
      {showText ? (
        <main>
          <section>
            <div className="diablitoons-text-container">
              <div className="diablitoons-text-main">
                <div
                  className={` ${
                    showCookingText
                      ? 'cooking-text-1'
                      : 'diablitoons-text-start'
                  }`}
                >
                  {showCookingText ? 'Cooking' : `Diablitoons is`}
                </div>

                <div
                  className={`${showCookingText ? 'cooking-text' : 'mezcal1'}`}
                >
                  {showCookingText ? 'up juicy stuff' : words[wordIndex]}
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <video
          src={videoWalk}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
      )}
    </>
  )
}

export default AnimatedText
 */
