import React, { useEffect } from 'react'
import arrow from './Assets/arrow.png'
import { motion as m, spring } from 'framer-motion'

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
      <m.div
        className='container'
        initial={{ fontSize: 0, opacity: 0 }}
        whileInView={{ fontSize: '100%', opacity: 1 }}
        transition={(spring, { delay: 0.2 })}
      >
        <h3>Welcome,</h3>

        <m.span
          id='name'
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          I'm Vali.
        </m.span>

        <span id='title'>Junior Front-End Developer</span>
      </m.div>
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
