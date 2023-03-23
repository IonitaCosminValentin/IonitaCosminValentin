import React from 'react'
import arrow from './arrow.png'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <h3>Welcome,</h3>

      <span id='name'>I'm Vali.</span>

      <span id='title'>Junior Front-End Developer</span>
      <div id='scroll'>
        <span>Scroll</span>
        <img src={arrow} alt='' />
      </div>
    </div>
  )
}

export default Intro
