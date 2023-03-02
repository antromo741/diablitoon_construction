import React from 'react'
import './animatedText.css'
import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const [wordIndex, setWordIndex] = useState(0)

  const words = ['Mezcal', 'Party', 'Tacos', 'Family', 'YOU.', 'Art']

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <main>
      <section>
        <div className="diablitoons-text-container">
          <div className="diablitoons-text-main">
            <div className="diablitoons-text-start">{`Diablitoons is `}</div>
            <div className="mezcal1">{`${words[wordIndex]}`}</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AnimatedText
