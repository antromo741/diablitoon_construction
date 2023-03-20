import React from 'react'
import './animatedText.css'
import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showCookingText, setShowCookingText] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const words = ['Art', 'Mezcal', 'Party', 'Tacos', 'Family', 'YOU.'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex === words.length - 1) {
        setShowCookingText(true);
        setTimeout(() => {
          setShowCookingText(false);
          setWordIndex(0);
          setActiveWordIndex(0);
        }, 2000);
      } else {
        setWordIndex((prevIndex) => prevIndex + 1);
        setActiveWordIndex((prevIndex) => prevIndex + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [wordIndex, words.length]);

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
              {showCookingText ? (
                'up juicy stuff'
              ) : (
                <div className="words">
                {words.map((word, index) => (
                  <div
                    key={index}
                    className={`word ${index === activeWordIndex ? 'active' : ''}`}
                  >
                    {word}
                  </div>
                ))}
              </div>
              )}
            </div>
          </div>
          <div className="sub-column">
            <div className="diablitoon-sub-header">
              We are a family of <strong> 13,333 Diablitos </strong> ready to
              <strong > explore </strong> the whole world and bring joy to everyone with <strong> art, culture </strong>and
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
