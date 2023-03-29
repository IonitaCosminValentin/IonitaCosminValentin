import React, { useEffect } from 'react'
import arrow from './arrow.png'

const Intro = () => {
  useEffect(() => {
    const animateScroll = () => {
      let scrollContainer = document.querySelector('.scroll')
      scrollContainer.classList.toggle('active')
    }
    animateScroll()
    setInterval(() => {
      animateScroll()
    }, 1500)
  }, [])
  return (
    <div id='intro'>
      <div className='container'>
        <h3>Welcome,</h3>

        <span id='name'>I'm Vali.</span>

        <span id='title'>Junior Front-End Developer</span>
      </div>
      <div
        className='scroll'
        onClick={() => {
          document.getElementById('about').scrollIntoView()
        }}
      >
        <span>Scroll</span>
        <img src={arrow} alt='' />
      </div>
    </div>
  )
}

export default Intro
